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
    backgroundColor: color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: color.pink,
    marginVertical: hp(1),
    fontSize: normalize(22),
  },
});
export default Header;
