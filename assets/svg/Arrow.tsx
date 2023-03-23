import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { View } from 'react-native';

import { commonColors } from '../../src/styles';
import { compose } from '../../src/helpers/styles';

export enum ArrowSVGDirection {
  right = 'right',
  top = 'top',
  left = 'left',
  bottom = 'bottom',
}

interface Props extends SvgProps {
  color?: string;
  size?: number;
  direction?: ArrowSVGDirection;
  containerStyles?: Array<{}> | {};
}

const ArrowSVG: FC<Props> = ({
  size,
  color = commonColors.black,
  direction = ArrowSVGDirection.right,
  containerStyles,
  ...props
}) => {
  const deg = {
    left: 180,
    bottom: 90,
    right: 0,
    top: 270,
  };

  return (
    <View
      style={[
        { transform: [{ rotate: `${deg[direction]}deg` }] },
        compose(containerStyles),
      ]}>
      <Svg
        width={size ? size - 2 : 12}
        height={size ? size : 14}
        viewBox="0 0 7 9"
        fill="none"
        {...props}>
        <Path
          d="M1 8l4-3.5L1 1"
          stroke={color}
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default ArrowSVG;
