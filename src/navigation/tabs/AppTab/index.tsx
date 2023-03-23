import React, { FC } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// StackScreens
import NewsStack from '../../stacks/NewsStack';
import ProfileStack from '../../stacks/ProfileStack';

// Icons
import TabProfileSVG from '../../../../assets/svg/NavigationTabs/TabProfile';
import TabHomeSVG from '../../../../assets/svg/NavigationTabs/TabHome';

import { renderTabBarIcon } from '../../../helpers/navigation';

const { Navigator, Screen } = createBottomTabNavigator<BottomTabBarProps>();

const AppTab: FC = ({}) => {
  return (
    <Navigator>
      <Screen
        name={'ProfileStack'}
        component={ProfileStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: renderTabBarIcon(TabProfileSVG),
          headerShown: false,
        }}
      />

      <Screen
        name="NewsStack"
        component={NewsStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: renderTabBarIcon(TabHomeSVG),
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppTab;
