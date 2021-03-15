import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {color, hp, wp, normalize} from './../Helper/AppHelper';
import Header from './../Components/Header';
import MyTextInput from '../Components/MyInputText';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
const UserDetails = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareView animated={true}>
        <Header />
        <ScrollView
          style={styles.mainContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Personal Details</Text>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Full Name'}
                iconName="user-circle-o"
                iconType="FontAwesome"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Professional Title'}
                iconName="user"
                iconType="FontAwesome"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Email'}
                iconName="email"
                iconType="MaterialCommunityIcons"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Phone Number'}
                iconName="mobile"
                iconType="Entypo"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Address'}
                iconName="location-pin"
                iconType="Entypo"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'City'}
                iconName="city"
                iconType="FontAwesome5"
              />
            </View>
            <View style={styles.inputView}>
              <MyTextInput
                placeholder={'Country'}
                iconName="flag"
                iconType="MaterialIcons"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareView>
      <View style={styles.nextButtonView}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('SocialLinks')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.background,
  },
  headerView: {
    marginVertical: hp(0.5),
    marginHorizontal: wp(4),
    backgroundColor: color.white,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: 10,
  },
  headerText: {
    fontSize: normalize(22),
  },
  inputView: {flexDirection: 'row', marginVertical: hp(1)},
  nextButtonView: {alignItems: 'flex-end'},
  nextButtonText: {
    backgroundColor: color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    marginHorizontal: wp(8),
    marginVertical: hp(1),
  },
});

export default UserDetails;
