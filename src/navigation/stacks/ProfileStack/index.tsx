import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../../screens/Profile';
import { setStackScreenOptions } from '../../../helpers/navigation';

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileStack: FC = ({}) => {
  return (
    <Navigator key="profile-stack">
      <Screen
        name={'Profile'}
        component={ProfileScreen}
        options={setStackScreenOptions('Profile', 0)}
      />
    </Navigator>
  );
};

export default ProfileStack;
