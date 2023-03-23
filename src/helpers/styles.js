import { Image } from 'react-native';
import flatMapDeep from 'lodash/flatMapDeep';

import { screenWidth } from './screen';

export const compose = (...styles) => flatMapDeep(styles).filter(v => v);

export const when = (cond, ...styles) => (cond ? styles : null);

export const getHeightOfImage = source => {
  const { width, height } = Image.resolveAssetSource(source);

  return (screenWidth * height) / width;
};
