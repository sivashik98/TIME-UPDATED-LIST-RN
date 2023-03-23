import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { commonColors } from '../../styles';
import { compose } from '../../helpers/styles';

interface Props extends ViewProps {
  containerStyles?: Array<{}> | {};
}

const BoxShadow: FC<Props> = ({ children, containerStyles }) => {
  return (
    <View style={[styles.container, compose(containerStyles)]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: commonColors.white,
    elevation: 7,
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});

export default BoxShadow;
