import {Dimensions, Platform} from 'react-native';
const {height, width} = Dimensions.get('window');

export const FONT_FAMILY = {
  REGULAR: 'Poppins-Regular',
  LIGHT: 'Poppins-Light',
  MEDIUM: 'Poppins-Medium',
  THIN: 'Poppins-Thin',
  BOLD: 'Poppins-Bold',
};

export const FONT_SIZE = {
  MICRO: 12,
  SMALL: 14,
  MEDIUM: 16,
  LARGE: 18,
  BIG: 20,
};

export const HEIGHT = {
  FULL_SCREEN: height,
  HALF_SCREEN: height / 2,
  ONE_FOURTH_SCREEN: height / 4,
  ONE_SIX_SCREEN: height / 6,
};

export const COLORS = {
  PRIMARY: '#3aa7fd',
  SECENDARY: '#7EC8E3',
  CARD_CYAN: '#f3faff',
  CARD_CYAN_DEEP: '#d8edff',
  TARTIARY: '#4b5a67',
  WHITE: '#FFFFFF',
  GRAY: '#727272',
  BLACK: '#000',
  GRAY_LIGHT: '#B4B4B4',
  TEXT_PURPLE: '#748AF9',
  TEXT_CYAN: '#407ba9',
  TEXT_BLUE: '#56A5FF',
  INPUT_GRAY: '#F6F6F6',
  INPUT_GRAY_BORDER: '#DEDEDE',
  RED: '#FB4646',
  TEXT_BLACK: '#1E1E1E',
  STOP: '#dc3545',
  MOVING: '#28a745',
  IDLE: '#ffc107',
  OFFLINE: '#6c757d',
};

export const STYLES = {
  LIGHT_TEXT: {
    fontFamily: FONT_FAMILY.LIGHT,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  NORMAL_TEXT: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
  BOLD_TEXT: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
  },
};

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};

export const WINDOW = {
  HEIGHT: height,
  WIDTH: width,
};

export const PADDING = {
  SMALL: 5,
  MEDIUM: 10,
  LARGE: 14,
};

export const APP_TYPE = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';

export const defaultImg =
  'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png';
