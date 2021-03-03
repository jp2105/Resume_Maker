import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {color} from '../Helper/AppHelper';

const MyTextInput = (props) => {
  const {placeholder = ''} = props;

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
    <View style={[styles.mainView]}>

      <TextInput
        style={[
          styles.textInput,
          {borderColor: isFocus ? color.pink : color.purple},
        ]}
        placeholder={placeholder}
        onBlur={TextInputOnBlur}
        onFocus={TextInputOnFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
  textInput: {
    height: 40,
    paddingLeft: 6,
    borderBottomWidth: 1,
  },
});

export default MyTextInput;
