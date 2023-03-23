import { Alert, Platform } from 'react-native';

export const getFakeLoaderData = (length = 4) =>
  new Array(length).fill(1).map(() => ({ id: Math.random() }));

// Platform Helpers

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const isWeb = Platform.OS === 'web';

// Alert Helper

export const customAlert = (title, message, buttons) => {
  return Alert.alert(title, message, [...buttons]);
};
