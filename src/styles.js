import { StyleSheet } from 'react-native';
import { capitalize } from 'lodash';

export const commonStyles = {
  margin: (side, size) => ({
    [`margin${side ? capitalize(side) : ''}`]: size,
  }),

  padding: (side, size) => ({
    [`padding${side ? capitalize(side) : ''}`]: size,
  }),

  flexShrink: {
    flexShrink: 1,
  },

  flexGrow: {
    flexGrow: 1,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  flexDirectionColumn: {
    flexDirection: 'column',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  justifyContentStart: {
    justifyContent: 'flex-start',
  },

  justifyContentBetween: {
    justifyContent: 'space-between',
  },

  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },

  flexWrap: {
    flexWrap: 'wrap',
  },

  rowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowCenterCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowCenterStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  rowCenterEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowStartSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  rowEndSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  rowEndStart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  flex: {
    flex: 1,
  },

  flex2: {
    flex: 2,
  },

  flex3: {
    flex: 3,
  },

  flex4: {
    flex: 4,
  },

  flex5: {
    flex: 5,
  },

  flexHalf: {
    flex: 0.5,
  },

  flexZeroSeven: {
    flex: 0.7,
  },

  flexZeroEight: {
    flex: 0.8,
  },

  flexZeroNine: {
    flex: 0.9,
  },

  flexOneHalf: {
    flex: 1.5,
  },

  flexOneThree: {
    flex: 1.3,
  },

  flexZero: {
    flex: 0,
  },

  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
  },

  width100: {
    width: '100%',
  },

  height100: {
    height: '100%',
  },

  backgroundTransparent: {
    backgroundColor: 'transparent',
  },

  rotate: deg => ({
    transform: [{ rotate: `${deg}deg` }],
  }),

  flatListShadow: (top, right, zIndex) => ({
    position: 'absolute',
    top: top || -20,
    right: right || 0,
    left: 0,
    zIndex: zIndex || 2,
    overflow: 'hidden',
  }),

  buttonBack: {
    marginLeft: 10,
    padding: 8,
    paddingRight: 35,
  },

  headerLeft: {
    marginLeft: 10,
    padding: 8,
    paddingRight: 35,
  },

  headerRight: {
    marginRight: 10,
    padding: 8,
    paddingLeft: 35,
  },
};

export const commonColors = {
  red: '#E63026',
  redShade: (shade = 1) => {
    const shades = {
      1: 1,
      2: 0.6,
      3: 0.3,
      4: 0.2,
    };

    return `rgba(230,48,38, ${shades[shade]})`;
  },
  green: '#25B541',
  greenShade: (shade = 1) => {
    const shades = {
      1: 1,
      2: 0.6,
      3: 0.3,
      4: 0.2,
    };

    return `rgba(37, 181, 65, ${shades[shade]})`;
  },
  blue: '#1A98E4',
  blueShade: (shade = 1) => {
    const shades = {
      1: 1,
      2: 0.6,
      3: 0.3,
      4: 0.1,
    };

    return `rgba(26, 152, 228, ${shades[shade]})`;
  },
  white: '#fff',
  whiteShade: (shade = 1) => {
    const shades = {
      1: 1,
      2: 0.75,
      3: 0.3,
      4: 0.1,
    };

    return `rgba(255, 255, 255, ${shades[shade]})`;
  },
  black: '#000',
  blackShade: (shade = 1) => {
    const shades = {
      1: 1,
      2: 0.6,
      3: 0.3,
      4: 0.1,
      5: 0.03,
    };

    return `rgba(0, 0, 0, ${shades[shade]})`;
  },
  orange: '#FF7A00',
};

export const basicStyles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
  },

  screenWrap: {
    flex: 1,
    backgroundColor: commonColors.white,
  },

  navigationHeaderStyle: {
    shadowOffset: {
      height: 0,
    },
    backgroundColor: commonColors.white,
  },

  navigationRightIcon: {
    marginRight: 10,
    padding: 8,
  },

  gestureResponseDistance: {
    horizontal: -1,
    vertical: -1,
  },
});

export const commonThings = {
  activeOpacity: 0.6,
  endReachedThreshold: 0.7,
};
