import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Importing screens and components
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../components/Login'; // Assuming you are using Login component in the drawer
import Register from '../components/Register'; // Updated to match the new file name
import PasswordRecovery from '../components/PasswordRecovery'; // For Password Recovery


// Creating navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator (for Home and Settings)
function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator (to manage screen transitions)
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Password Recovery" component={PasswordRecovery} />
    </Stack.Navigator>
  );
}

// Drawer Navigator (which includes the AppStack and other screens)
export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AppStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Password Recovery" component={PasswordRecovery} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
