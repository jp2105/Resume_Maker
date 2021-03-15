import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import Icon from 'react-native-dynamic-vector-icons';
import Header from './Header';
import {color, hp, normalize, wp} from '../Helper/AppHelper';
import MyTextInput from './MyInputText';

const WorkHistoryForm = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareView animated={true}>
        <Header />
        <ScrollView automaticallyAdjustContentInsets={false}>
          <View style={styles.mainContainer}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Job Description</Text>
              <View style={styles.inputView}>
                <MyTextInput placeholder={'Title/Position'} />
              </View>
              <View style={styles.inputView}>
                <MyTextInput placeholder={'Workplace/Company'} />
              </View>
              <View style={styles.inputView}>
                <MyTextInput placeholder={'mm'} />
                <Text style={styles.dateText}>/</Text>
                <MyTextInput placeholder={'yyyy'} />
                <Text style={styles.dateText}>-</Text>
                <MyTextInput placeholder={'mm'} />
                <Text style={styles.dateText}>/</Text>
                <MyTextInput placeholder={'yyyy'} />
                <Icon
                  name={'radio-btn-active'}
                  type={'Fontisto'}
                  size={wp(5)}
                  color={color.primary}
                  onPress={() => {}}
                  style={{marginHorizontal: wp(1.5)}}
                />
                <Text style={styles.dateText}>Present</Text>
              </View>
              <View style={styles.inputView}>
                <MyTextInput placeholder={'City/Country'} />
              </View>
              <View style={styles.inputView}>
                <MyTextInput
                  placeholder={'Company Descripition(optional)'}
                  multiline={true}
                  numberOfLines={3}
                  textInputHeight={hp(10)}
                />
              </View>
              <View style={styles.inputView}>
                <MyTextInput
                  placeholder={'Accomplishment/Responsibility/Task'}
                  multiline={true}
                  numberOfLines={3}
                  textInputHeight={hp(10)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareView>
      <View style={styles.nextButtonView}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('WorkHistory')}>
          <Text style={styles.nextButtonText}>Cancel</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('WorkHistory')}>
          <Text style={styles.nextButtonText}>Save</Text>
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
  inputView: {
    flexDirection: 'row',
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonView: {justifyContent: 'space-between', flexDirection: 'row'},
  nextButtonText: {
    backgroundColor: color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    marginHorizontal: wp(8),
    marginVertical: hp(1),
  },
  dateText: {
    fontSize: normalize(18),
  },
});

export default WorkHistoryForm;
