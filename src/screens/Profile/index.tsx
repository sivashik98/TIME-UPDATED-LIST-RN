import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationParams } from 'react-navigation';

import Profile from '../../pages/Profile';

import { profileSelector } from '../../store/selectors/profile';
import { fetchUser, refreshData } from '../../store/actions/profile';

import { basicStyles } from '../../styles';

const ProfileScreen: FC<NavigationParams> = ({}) => {
  const dispatch = useDispatch();
  const { user, isFetchingUser, isRefreshing } = useSelector(profileSelector);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleRefresh = () => {
    dispatch(refreshData());
  };

  return (
    <View style={basicStyles.screenWrap}>
      <Profile
        isFetchingUser={isFetchingUser}
        isRefreshing={isRefreshing}
        user={user}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default ProfileScreen;
