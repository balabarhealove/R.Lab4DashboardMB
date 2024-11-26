import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
