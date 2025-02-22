import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VpnLoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Title and Logo */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
          <Image source={require('./logo1.png')} style={styles.logo} />
        </View>

        <Text style={styles.subTitle}>
          Login now to access faster internet in more than 90+ locations.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#007bff" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#007bff" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.socialText}>Login via social media</Text>

        {/* Social Media Login Buttons */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Image source={require('./gmail-icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Gmail</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Image source={require('./apple-icon.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Apple ID</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row', // Align title and logo horizontally
    alignItems: 'center', // Vertically center the title and logo
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10, // Add some space between title and logo
  },
  logo: {
    width: 30,
    height: 30, // Adjust size of the logo
    resizeMode: 'contain',
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
    justifyContent:'center'
  },
  socialButton: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightImage: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default VpnLoginPage;
