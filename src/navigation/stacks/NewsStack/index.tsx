import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsScreen from '../../../screens/News';
import PostScreen from '../../../screens/Post';

import { setStackScreenOptions } from '../../../helpers/navigation';

const { Navigator, Screen } = createNativeStackNavigator();

const NewsStack: FC = ({}) => {
  return (
    <Navigator key="news-stack">
      <Screen
        name={'News'}
        component={NewsScreen}
        options={setStackScreenOptions('News', 0)}
      />

      <Screen
        name={'Post'}
        component={PostScreen}
        options={setStackScreenOptions('Post')}
      />
    </Navigator>
  );
};

export default NewsStack;
