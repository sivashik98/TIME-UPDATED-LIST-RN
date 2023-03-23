import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationParams } from 'react-navigation';

import News from '../../pages/News';

import { newsSelector } from '../../store/selectors/news';
import { fetchNews, refreshData } from '../../store/actions/news';

import { basicStyles } from '../../styles';

const NewsScreen: FC<NavigationParams> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { news, isFetchingNews, isRefreshing } = useSelector(newsSelector);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const handleRefresh = () => {
    dispatch(refreshData());
  };

  const handleMoveToPost = (id, resetTimerUpdate) => () => {
    navigation.navigate('Post', {
      id,
      onPressBack: handleRefresh,
      onResetTimer: resetTimerUpdate,
    });
  };

  return (
    <View style={basicStyles.screenWrap}>
      <News
        isFetchingNews={isFetchingNews}
        isRefreshing={isRefreshing}
        news={news}
        onRefresh={handleRefresh}
        onMoveToPost={handleMoveToPost}
      />
    </View>
  );
};

export default NewsScreen;
