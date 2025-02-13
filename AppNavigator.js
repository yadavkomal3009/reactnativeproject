import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import ListingPage from '../screens/ListingPage';
import DetailsPage from '../screens/DetailsPage';
import LanguageSettingsPage from '../screens/LanguageSettingsPage'; // Optional

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Listing" component={ListingPage} />
      <Stack.Screen name="Details" component={DetailsPage} />
      <Stack.Screen name="LanguageSettings" component={LanguageSettingsPage} /> {/* Optional */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
