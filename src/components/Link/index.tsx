import React, { FC } from 'react';
import { StyleSheet, TextProps, TouchableOpacity, View } from 'react-native';

import StyledText from '../StyledText';
import ContentLoader from '../ContentLoader';

import { compose } from '../../helpers/styles';
import { commonColors, commonStyles, commonThings } from '../../styles';

interface Props extends TextProps {
  isLoading?: boolean;
  text: string;
  onPress?: () => void;
  containerStyles?: Array<{}> | {};
}

const Link: FC<Props> = ({
  isLoading,
  text = 'Source link',
  onPress,
  containerStyles,
  ...props
}) => {
  if (isLoading) {
    return <ContentLoader containerStyles={styles.loader} />;
  }

  return (
    <TouchableOpacity
      activeOpacity={commonThings.activeOpacity}
      onPress={onPress}
      style={compose(containerStyles)}>
      <View style={styles.container}>
        <View>
          <StyledText fontSize={14} color={commonColors.blue} {...props}>
            {text}
          </StyledText>

          <View style={styles.underline} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loader: {
    height: 16,
    marginLeft: 5,
    marginRight: 5,
  },

  container: {
    ...commonStyles.rowCenterStart,
  },

  underline: {
    height: 1,
    backgroundColor: commonColors.blue,
  },
});

export default Link;
