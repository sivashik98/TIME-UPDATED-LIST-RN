import React, { FC } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

import { compose, getHeightOfImage } from '../../helpers/styles';
import { commonStyles } from '../../styles';

interface Props extends ImageProps {
  containerStyles?: Array<object> | object;
  imgStyles?: Array<object> | object;
}

const AdaptedImage: FC<Props> = ({
  source,
  containerStyles,
  imgStyles,
  ...props
}) => {
  const height = getHeightOfImage(source);

  return (
    <View style={[styles.container, compose(containerStyles)]}>
      <Image
        source={source}
        style={[styles.image, { height }, compose(imgStyles)]}
        resizeMode="contain"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
  },

  image: {
    ...commonStyles.width100,
  },
});

export default AdaptedImage;
