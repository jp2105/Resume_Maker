import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {color, hp, wp, normalize} from './../Helper/AppHelper';
import Header from './../Components/Header';
import slicedToArrayLoose from '@babel/runtime/helpers/esm/slicedToArrayLoose';
import MyTextInput from '../Components/MyInputText';

const UserDetails = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>User Details</Text>
          <View style={{flexDirection:'row'}}>
            <MyTextInput placeholder={'Full Name'} />
            <MyTextInput placeholder={'TEST'} />
          </View>
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Social Links</Text>
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Work History</Text>
        </View>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Skills</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerView: {
    marginVertical: hp(1),
    marginHorizontal: wp(3),
  },
  headerText: {
    fontSize: normalize(22),
  },
});

export default UserDetails;
