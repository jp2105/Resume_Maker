import React, {useState} from 'react';
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
import Icon from 'react-native-dynamic-vector-icons';
import WorkHistoryModel from '../Components/WorkHistoryModel';

const WorkHistory = (props) => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <WorkHistoryModel isVisible={isOpenModel} setIsVisible={setIsOpenModel} />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Work History</Text>
          <View style={styles.inputView}>
            <TouchableWithoutFeedback
              onPress={() => {
                setIsOpenModel(true);
              }}>
              <View style={styles.jobButtonView}>
                <Icon
                  name={'circle-with-plus'}
                  type={'Entypo'}
                  size={wp(6)}
                  color={color.primary}
                  onPress={() => {}}
                />
                <Text style={styles.addJobText}>Add Job</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <View style={styles.nextButtonView}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('SocialLinks')}>
          <Text style={styles.nextButtonText}>Prev</Text>
        </TouchableWithoutFeedback>
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
  nextButtonView: {justifyContent: 'space-between', flexDirection: 'row'},
  nextButtonText: {
    backgroundColor: color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    marginHorizontal: wp(8),
    marginVertical: hp(1),
  },
  jobButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    paddingHorizontal: wp(2),
    borderRadius: 20,
  },
  addJobText: {
    color: color.white,
    paddingVertical: hp(1),
    marginLeft: wp(2),
  },
});

export default WorkHistory;
