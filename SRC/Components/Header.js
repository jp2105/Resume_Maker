import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, hp, normalize} from '../Helper/AppHelper';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.headerText, {fontWeight: '700'}]}>Resume Maker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: color.white,
    marginTop: hp(1),
    marginBottom:hp(2),
    fontSize: normalize(22),
  },
});
export default Header;
