import React, { FC } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';

import { compose, when } from '../../helpers/styles';
import { commonColors, commonStyles } from '../../styles';

const loader = {
  color: commonColors.black,
};

export enum StyledLoaderSize {
  small = 'small',
  large = 'large',
}

interface Props extends ActivityIndicatorProps {
  isTransparent?: boolean;
  containerStyles?: Array<{}> | {};
}

const StyledLoader: FC<Props> = ({
  isTransparent,
  size,
  color,
  containerStyles,
}) => {
  return (
    <View
      style={[
        styles.container,
        when(isTransparent, styles.transparent),
        compose(containerStyles),
      ]}>
      <ActivityIndicator
        size={size || StyledLoaderSize.small}
        color={color || loader.color}
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 5,
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
  },

  transparent: {
    ...commonStyles.backgroundTransparent,
  },

  loader: {
    backgroundColor: commonColors.white,
    padding: 15,
    borderRadius: 8,
  },
});

export default StyledLoader;
