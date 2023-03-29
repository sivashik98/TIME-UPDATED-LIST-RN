import React, { FC } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { capitalize } from 'lodash';

import StyledText from '../../components/StyledText';
import BoxShadow from '../../components/BoxShadow';

import { titlesHandler } from '../../helpers/valuesHandler';
import { basicStyles, commonStyles } from '../../styles';
import { IPost } from '../../models/post';

interface Props {
  post: IPost;
  isFetchingPost: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
}

const Post: FC<Props> = ({ post, isFetchingPost, isRefreshing, onRefresh }) => {
  const isBusyPost = isFetchingPost || isRefreshing;
  const id = post?.id;
  const title = capitalize(titlesHandler(post?.title));
  const content = titlesHandler(post?.body);

  const handleRefresh = () => {
    onRefresh && onRefresh();
  };

  return (
    <View style={basicStyles.container}>
      <BoxShadow>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          showsVerticalScrollIndicator={false}>
          <View style={commonStyles.rowCenterStart}>
            <StyledText bold fontSize={24}>
              id:
            </StyledText>

            <StyledText
              isLoading={isBusyPost}
              bold
              fontSize={24}
              textStyles={commonStyles.margin('left', 15)}>
              {id}
            </StyledText>
          </View>

          <StyledText
            isLoading={isBusyPost}
            bold
            fontSize={20}
            textStyles={commonStyles.margin('top', 15)}>
            {title}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            textStyles={commonStyles.margin('top', 15)}>
            {content}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            textStyles={commonStyles.margin('top', 15)}>
            {content}
          </StyledText>

          <StyledText
            isLoading={isBusyPost}
            fontSize={20}
            textStyles={commonStyles.margin('top', 15)}>
            {content}
          </StyledText>
        </ScrollView>
      </BoxShadow>
    </View>
  );
};

export default Post;
