import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import { compose } from '../../helpers/styles';
import { commonStyles } from '../../styles';

export const loader = {
  colors: ['rgba(246,246,246,0.85)', 'rgba(222,222,222,0.5)'],
  startCoordinates: { x: 0, y: 0.5 },
  endCoordinates: { x: 0, y: 1 },
};

interface Props extends LinearGradientProps {
  containerStyles?: Array<{}> | {};
}

const ContentLoader: FC<Props> = ({
  colors = loader.colors,
  containerStyles,
  ...props
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={loader.startCoordinates}
      end={loader.endCoordinates}
      style={[styles.content, compose(containerStyles)]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    ...commonStyles.flex,
    borderRadius: 8,
  },
});

export default ContentLoader;
