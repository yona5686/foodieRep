import React from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register({ navigation }) {

  return (//to put all of them in useState or to pass them in context or something else????????????????????????????????????????????
    <View style={styles.container}>
      <Image source={require('../assets/turtleCooking.png')} style={styles.image} />
      <Text style={styles.title}>Foodie</Text>
      <Text style={styles.subtitle}>Discover and order from local restaurants</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Delivery Address" style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fff0', // Light green background
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
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
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#90EE90', // Light green button
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
