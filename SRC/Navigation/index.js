import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetails from '../Screen/UserDetails';
import SocialLinks from '../Screen/SocialLinks';
import WorkHistory from '../Screen/WorkHistory';
import WorkHistoryForm from '../Components/WorkHistoryForm';
const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="SocialLinks" component={SocialLinks} />
        <Stack.Screen name="WorkHistory" component={WorkHistory} />
        <Stack.Screen name="WorkHistoryForm" component={WorkHistoryForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
