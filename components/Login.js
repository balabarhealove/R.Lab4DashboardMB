import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const Login = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Example authentication logic
    if (email === 'Rhea@yahoo.com' && password === 'password123') {
      setIsLoggedIn(true); // Update global login state
      navigation.navigate('Home'); // Navigate to Home screen
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rhea's App</Text>
      <Text style={styles.subtitle}>Enter your account credentials</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Register')} style={styles.link}>
        Register
      </Button>
      <Button onPress={() => navigation.navigate('PasswordRecovery')} style={styles.link}>
        Forgot your password?
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

export default Login;
