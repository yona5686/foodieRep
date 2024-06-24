import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function GetStarted({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/HomeChefPic.png')} style={styles.image} />
      <Text style={styles.title}>Hungry?</Text>
      <Text style={styles.subtitle}>Discover new flavors and dishes easily</Text>

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fff0', // Light green background
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#90EE90', // Light green button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  createAccountButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderColor: '#90EE90', // Light green border
    borderWidth: 1,
  },
  createAccountText: {
    color: '#90EE90',
    fontSize: 16,
  },
});