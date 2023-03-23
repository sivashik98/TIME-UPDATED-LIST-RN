import React from 'react';
import { TouchableOpacity } from 'react-native';

import ArrowSVG from '../../assets/svg/Arrow';

import {
  basicStyles,
  commonColors,
  commonStyles,
  commonThings,
} from '../styles';

export const moveToSpecificScreenOut =
  navigation =>
  (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

export const resetSpecificStack = (
  navigation,
  index = 0,
  key = '',
  routes = [],
) => {
  navigation.reset({
    index,
    key,
    routes,
  });
};

export const setStackScreenOptions =
  (title, isBack = true, ...options) =>
  ({ navigation }) => {
    const handleBack = () => navigation.goBack();

    return {
      title,
      headerStyle: basicStyles.navigationHeaderStyle,
      headerTitleStyle: {
        fontSize: 16,
      },
      headerTitleAlign: 'center',
      tabBarVisible: false,
      headerStatusBarHeight: 0,
      gestureEnabled: isBack,
      gestureDirection: 'horizontal',
      // headerShown: false,
      headerBorder: 0,
      headerLeft: isBack
        ? () => (
            <TouchableOpacity
              style={commonStyles.buttonBack}
              activeOpacity={commonThings.activeOpacity}
              onPress={handleBack}>
              <ArrowSVG direction={'left'} />
            </TouchableOpacity>
          )
        : null,
      ...options,
    };
  };

export const renderTabBarIcon =
  Icon =>
  ({ focused }) => {
    const color = focused ? commonColors.black : commonColors.blackShade(3);

    return <Icon color={color} />;
  };
