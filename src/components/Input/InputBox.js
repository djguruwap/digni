import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../Utils/Metrics';
import {TextInputError} from '../Error/InputError';
import Icon from '../Icon/Icon';

export const Input = ({
  value,
  onChange,
  placeholder,
  icon,
  keyboardType,
  backgroundColor,
  borderColor,
  maxLength,
  onBlur,
  error,
  touched,
  isSecure,
  editable,
  isIcon,
  multiline,
  numberOfLine,
  height,
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          {borderColor, backgroundColor, height: height || 42},
        ]}>
        <View style={styles.row}>
          <TextInput
            editable={editable}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            keyboardType={keyboardType}
            placeholderTextColor={'#C9C9C9'}
            placeholder={placeholder}
            style={[styles.input, {height: height || 70}]}
            secureTextEntry={isSecure}
            multiline={multiline}
            numberOfLines={numberOfLine}
          />
          {icon && <Icon source={icon} />}
        </View>
      </View>
      <TextInputError error={error} touched={touched} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    borderColor: '#D0EEFF',
    height: 42,
    marginVertical: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.BLACK,
    height: 70,
  },
});
