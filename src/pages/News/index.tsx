import React, { FC, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import AdaptedImage from '../../components/AdaptedImage';
import Post from '../../components/Post';

import { basicStyles, commonStyles } from '../../styles';
import { getFakeLoaderData } from '../../helpers/common';
import { IPost } from '../../models/post';
import { useInterval } from '../../hooks/useInterval';

const timeInterval = 30000;

interface Props {
  news: IPost[];
  isFetchingNews: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onMoveToPost: (id: number, resetTimerUpdate: () => void) => number;
}

const News: FC<Props> = ({
  news,
  isFetchingNews,
  isRefreshing,
  onRefresh,
  onMoveToPost,
}) => {
  const [timerUpdate, setTimerUpdate] = useState<number>(timeInterval);

  const isBusyNews = isFetchingNews || isRefreshing;
  const newsData = isBusyNews ? getFakeLoaderData(6) : news;
  const source = require('../../../assets/img/EmptyList.png');

  useInterval(onRefresh, timerUpdate);

  useEffect(() => {
    if (!isRefreshing) {
      setTimerUpdate(timeInterval);
    }
  }, [isRefreshing]);

  const resetTimerUpdate = () => setTimerUpdate(null);

  const handleRefresh = () => {
    resetTimerUpdate();

    onRefresh && onRefresh();
  };

  const renderPost = ({ item }) => {
    const id = item?.id;
    const title = item?.title;
    const content = item?.body;

    return (
      <Post
        isLoading={isBusyNews}
        key={id}
        title={title}
        content={content}
        onPress={onMoveToPost(id, resetTimerUpdate)}
        containerStyles={commonStyles.margin('', 10)}
      />
    );
  };

  const renderEmptyHorizontalList = () => {
    return <AdaptedImage source={source} />;
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      data={newsData}
      renderItem={renderPost}
      ListEmptyComponent={renderEmptyHorizontalList}
      scrollEnabled={newsData.length}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={basicStyles.container}
      windowSize={7}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default News;
