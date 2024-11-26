import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const PasswordRecovery = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rhea's App</Text>
      <Text style={styles.subtitle}>Recover your password</Text>

      <TextInput
        label="Email"
        mode="outlined"
        left={<TextInput.Icon name="email" />}
        style={styles.input}
      />

      <Button mode="contained" style={styles.button}>Send Recovery Link</Button>
      <Button onPress={() => navigation.navigate('Login')} style={styles.link}>
        Back to Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2E1E3D',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#E0E0E0',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#AFAFAF',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#D9C5A5',
  },
  link: {
    marginTop: 10,
  },
});

export default PasswordRecovery;