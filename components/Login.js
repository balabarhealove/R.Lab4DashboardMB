import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  const handleLogin = () => {
    // Simple login check (just an example, you can add validation here)
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true); // Set the login state to true after successful login
    } else {
      alert('Invalid credentials!'); // Alert for invalid credentials
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
        onChangeText={(text) => setEmail(text)} // Update email state
        left={<TextInput.Icon name="email" />}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)} // Update password state
        left={<TextInput.Icon name="lock" />}
        style={styles.input}
      />

      {/* Conditional rendering based on login state */}
      {isLoggedIn ? (
        <View>
          <Text style={styles.welcomeMessage}>Welcome! You are logged in.</Text>
          <Icon name="check-circle" size={30} color="green" /> {/* Icon displayed after login */}
        </View>
      ) : (
        <Button mode="contained" style={styles.button} onPress={handleLogin}>Login</Button>
      )}

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
  welcomeMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Login;
