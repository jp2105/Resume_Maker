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

const SocialLinks = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Social Links</Text>
          <View style={styles.inputView}>
            <MyTextInput
              placeholder={'LinkedIn'}
              iconName="linkedin-square"
              iconType="AntDesign"
            />
          </View>
          <View style={styles.inputView}>
            <MyTextInput
              placeholder={'GitHub'}
              iconName="github"
              iconType="AntDesign"
            />
          </View>
          <View style={styles.inputView}>
            <MyTextInput
              placeholder={'Website'}
              iconName="web"
              iconType="MaterialCommunityIcons"
            />
          </View>
          <View style={styles.inputView}>
            <MyTextInput
              placeholder={'Twitter'}
              iconName="twitter"
              iconType="AntDesign"
            />
          </View>
          <View style={styles.inputView}>
            <MyTextInput
              placeholder={'Quora'}
              iconName="quora"
              iconType="FontAwesome"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.nextButtonView}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('UserDetails')}>
          <Text style={styles.nextButtonText}>Prev</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('WorkHistory')}>
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
  nextButtonView: {justifyContent: 'space-between', flexDirection: 'row'},
  nextButtonText: {
    backgroundColor: color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    marginHorizontal: wp(8),
    marginVertical: hp(1),
  },
});

export default SocialLinks;
