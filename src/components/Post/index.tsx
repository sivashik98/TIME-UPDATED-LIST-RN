import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { capitalize } from 'lodash';

import StyledText from '../StyledText';
import BoxShadow from '../BoxShadow';
import AdaptedImage from '../AdaptedImage';

import { compose } from '../../helpers/styles';
import { getReducedString } from '../../helpers/strings';
import { titlesHandler } from '../../helpers/valuesHandler';

interface Props {
  isLoading?: boolean;
  title: string;
  content: string;
  onPress?: () => void;
  containerStyles?: Array<{}> | {};
}

const Post: FC<Props> = ({
  isLoading,
  title,
  content,
  onPress,
  containerStyles,
}) => {
  const source = require('../../../assets/img/Newspaper.png');
  const verifiedTitle = capitalize(titlesHandler(title));
  const verifiedContent = getReducedString(titlesHandler(content), 40);

  const handlePress = () => {
    if (!isLoading) {
      onPress && onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <BoxShadow containerStyles={compose(containerStyles)}>
        <StyledText isLoading={isLoading} isBold fontSize={22}>
          {verifiedTitle}
        </StyledText>

        <StyledText isLoading={isLoading} textStyles={styles.content}>
          {verifiedContent}
        </StyledText>

        <AdaptedImage source={source} />
      </BoxShadow>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
  },
});

export default Post;
