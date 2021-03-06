import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {color, wp, hp, normalize} from '../Helper/AppHelper';

const MyTextInput = (props) => {
  const {
    placeholder = '',
    iconName = '',
    iconType = '',
    multiline = false,
    numberOfLines = 1,
    textInputHeight=40
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const TextInputOnBlur = (event) => {
    if (isFocus) {
      setIsFocus(false);
    }
  };

  const TextInputOnFocus = () => {
    if (!isFocus) {
      setIsFocus(true);
    }
  };
  return (
    <View
      style={[
        styles.mainView,
        {borderColor: isFocus ? color.primary : color.black},
      ]}>
      {iconName != '' && (
        <Icon
          name={iconName}
          type={iconType}
          size={wp(6)}
          color={isFocus ? color.primary : color.black}
          onPress={() => {}}
        />
      )}
      <TextInput
        style={[
          styles.textInput,
          {color: isFocus ? color.primary : color.black, height: textInputHeight},
        ]}
        placeholder={placeholder}
        onBlur={TextInputOnBlur}
        onFocus={TextInputOnFocus}
        numberOfLines={numberOfLines}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingHorizontal: 6,
    flex: 1,
    marginLeft: wp(1.5),
    fontSize: normalize(18),
  },
});

export default MyTextInput;
