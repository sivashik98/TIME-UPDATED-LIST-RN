import React, { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import ContentLoader from '../ContentLoader';

import { compose, when } from '../../helpers/styles';
import { commonColors } from '../../styles';

interface Props extends TextProps {
  isLoading?: boolean;
  isBold?: boolean;
  isUppercase?: boolean;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  textStyles?: Array<{}> | {};
  children: string;
}

const StyledText: FC<Props> = ({
  isLoading,
  isBold,
  isUppercase,
  fontSize,
  lineHeight,
  color,
  textStyles,
  children,
  ...props
}) => {
  const loaderHeight = fontSize ? fontSize * 1.5 : 18;

  if (isLoading) {
    return (
      <ContentLoader
        containerStyles={[
          styles.loader,
          { height: loaderHeight },
          compose(textStyles),
        ]}
      />
    );
  }

  return (
    <Text
      style={[
        styles.text,
        when(isBold, styles.bold),
        when(isUppercase, styles.uppercase),
        when(color, { color }),
        when(lineHeight, { lineHeight }),
        when(fontSize, { fontSize }),
        textStyles,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginLeft: 5,
    marginRight: 5,
  },

  text: {
    color: commonColors.black,
    fontWeight: 'normal',
    flexShrink: 1,
    fontSize: 18,
  },

  bold: {
    fontWeight: 'bold',
  },

  uppercase: {
    textTransform: 'uppercase',
  },
});

export default StyledText;
