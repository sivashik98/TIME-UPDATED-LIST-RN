import React, { FC, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationParams } from 'react-navigation';

import Post from '../../pages/Post';
import ArrowSVG from '../../../assets/svg/Arrow';

import { basicStyles, commonStyles, commonThings } from '../../styles';
import { fetchPost, refreshData } from '../../store/actions/post';
import { postSelector } from '../../store/selectors/post';

const PostScreen: FC<NavigationParams> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { id, onPressBack, onResetTimer } = route.params;
  const { post, isFetchingPost, isRefreshing } = useSelector(postSelector);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={commonStyles.buttonBack}
          activeOpacity={commonThings.activeOpacity}
          onPress={handlePressBack}>
          <ArrowSVG direction={'left'} />
        </TouchableOpacity>
      ),
    });
    onResetTimer();
    dispatch(fetchPost(id));
  }, []);

  const handlePressBack = () => {
    navigation.goBack();

    onPressBack && onPressBack();
  };

  const handleRefresh = () => {
    dispatch(refreshData(id));
  };

  return (
    <View style={basicStyles.screenWrap}>
      <Post
        isFetchingPost={isFetchingPost}
        isRefreshing={isRefreshing}
        post={post}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default PostScreen;
