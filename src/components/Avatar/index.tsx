import React, { FC, useState } from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';

import EmptyAvatar from '../../../assets/svg/EmptyAvatar';

import { compose, when } from '../../helpers/styles';

const loaderProps = {
  size: 35,
  color: '#ededed',
};

interface Props extends ImageProps {
  isShadow?: boolean;
  imageStyles?: Array<{}> | {};
  containerStyles?: Array<{}> | {};
}

const Avatar: FC<Props> = ({
  isShadow,
  source,
  imageStyles,
  containerStyles,
  ...props
}) => {
  const [loader, setLoader] = useState<boolean>(true);

  const handleLoadEnd = () => {
    setLoader(false);
  };

  return (
    <View
      style={[
        styles.container,
        when(isShadow, styles.shadow),
        compose(containerStyles),
      ]}>
      <>
        {source && loader ? (
          <PulseIndicator
            size={loaderProps.size}
            color={loaderProps.color}
            style={styles.loader}
          />
        ) : null}

        {source ? (
          <Image
            source={source}
            style={[styles.image, compose(imageStyles)]}
            resizeMode="contain"
            onLoadEnd={handleLoadEnd}
            {...props}
          />
        ) : (
          <EmptyAvatar />
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },

  loader: {
    position: 'absolute',
    top: 16,
    left: 16,
  },

  image: {
    height: 68,
    width: 68,
    borderRadius: 50,
  },
});

export default Avatar;
