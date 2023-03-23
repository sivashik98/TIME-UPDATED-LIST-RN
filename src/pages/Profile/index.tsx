import React, { FC } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import StyledText from '../../components/StyledText';
import BoxShadow from '../../components/BoxShadow';
import Link from '../../components/Link';
import Avatar from '../../components/Avatar';

import { basicStyles, commonStyles } from '../../styles';
import { titlesHandler } from '../../helpers/valuesHandler';
import { getReducedString } from '../../helpers/strings';
import { IUser } from '../../models/user';

interface Props {
  user: IUser;
  isFetchingUser: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
}

const Profile: FC<Props> = ({
  user,
  isFetchingUser,
  isRefreshing,
  onRefresh,
}) => {
  const isBusyUser = isFetchingUser || isRefreshing;
  const verifiedName = titlesHandler(user?.name);
  const verifiedUsername = titlesHandler(user?.username);
  const verifiedEmail = titlesHandler(user?.email);
  const verifiedStreet = titlesHandler(user?.address?.street);
  const verifiedSuite = titlesHandler(user?.address?.suite);
  const verifiedCity = titlesHandler(user?.address?.city);
  const verifiedZipcode = titlesHandler(user?.address?.zipcode);
  const verifiedPhone = titlesHandler(user?.phone);
  const verifiedWebsite = titlesHandler(user?.website);
  const verifiedCompanyName = titlesHandler(user?.company?.name);
  const verifiedCompanyCatchPhrase = getReducedString(
    titlesHandler(user?.company?.catchPhrase),
    20,
  );
  const verifiedCompanyBs = titlesHandler(user?.company?.bs);

  const handleRefresh = () => {
    onRefresh && onRefresh();
  };

  return (
    <ScrollView
      style={basicStyles.container}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }>
      <View style={commonStyles.rowStartSpaceBetween}>
        <Avatar containerStyles={commonStyles.flex} />

        <View style={commonStyles.flex2}>
          <StyledText
            isLoading={isBusyUser}
            fontSize={18}
            textStyles={commonStyles.margin('bottom', 6)}>
            {verifiedName}
          </StyledText>

          <StyledText
            isLoading={isBusyUser}
            textStyles={commonStyles.margin(
              'bottom',
              6,
            )}>{`${verifiedUsername} (username)`}</StyledText>

          <StyledText
            isLoading={isBusyUser}>{`${verifiedEmail} (email)`}</StyledText>
        </View>
      </View>

      <BoxShadow containerStyles={commonStyles.margin('top', 30)}>
        <StyledText fontSize={24} bold>
          Profile
        </StyledText>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Street:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedStreet}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Suite:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedSuite}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            City:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedCity}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Zipcode:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedZipcode}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Phone:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedPhone}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Website:
          </StyledText>

          <Link isLoading={isBusyUser} fontSize={18} text={verifiedWebsite} />
        </View>
      </BoxShadow>

      <BoxShadow containerStyles={commonStyles.margin('top', 30)}>
        <StyledText fontSize={24} bold>
          Company
        </StyledText>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Company Name:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedCompanyName}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Catch Phrase:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedCompanyCatchPhrase}
          </StyledText>
        </View>

        <View
          style={[
            commonStyles.rowCenterSpaceBetween,
            commonStyles.margin('top', 20),
          ]}>
          <StyledText bold fontSize={18}>
            Company Bs:
          </StyledText>

          <StyledText isLoading={isBusyUser} fontSize={18}>
            {verifiedCompanyBs}
          </StyledText>
        </View>
      </BoxShadow>
    </ScrollView>
  );
};

export default Profile;
