import {Dimensions, PixelRatio, Platform} from 'react-native';
import {exp} from 'react-native-reanimated';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';
const isANDROID = Platform.OS === 'android';
const isiPAD = screenHeight / screenWidth < 1.6;

const widthPercentageToDP = (wp) => {
  const widthPercent = wp;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (hp) => {
  const heightPercent = hp;
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// based on iphone 5s's scale
const scale = screenWidth / 375;
const normalize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const color = {
  black: '#000000',
  white: '#ffffff',
  purple: '#8a2be2',
  pink: 'rgb(226,0,117)',
  lightGrey: '#E0E0E0',
  background: 'rgb(37,45,55)',
  primary: 'rgb(56,179,159)',
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  normalize,
  color,
};
