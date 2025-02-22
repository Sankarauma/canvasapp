import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  VpnPage: undefined;
  FirstPage: undefined;
  SecondPage: undefined;
  VpnLoginPage: undefined;
};

type VpnPageNavigationProp = StackNavigationProp<RootStackParamList, 'VpnPage'>;

const VpnPage = () => {
  const navigation = useNavigation<VpnPageNavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate('FirstPage');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./map.png')} style={styles.mapImage} />
      <View style={styles.overlayContainer}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.title}>Secure Your Connection</Text>
        <Text style={styles.descriptionText}>
          Keep your data private and secure every time you connect.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FirstPage = () => {
  const navigation = useNavigation<VpnPageNavigationProp>();

  const handleNext = () => {
    navigation.navigate('SecondPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlayContainer}>
        <Image source={require('./conn1.png')} style={styles.imageForeground} />
        <Text style={styles.descriptionText}>
          Browse without boundaries. Connect to high-speed servers worldwide and access content from anywhere. No restrictions, no limits.
        </Text>
        
        <View style={styles.dotContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        
        <TouchableOpacity style={styles.circleButton} onPress={handleNext}>
          <Text style={styles.circleText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondPage = () => {
  const navigation = useNavigation<VpnPageNavigationProp>();

  const handleNext = () => {
    navigation.navigate('VpnLoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlayContainer}>
        <Image source={require('./conn2.png')} style={styles.imageForeground} />
        <Text style={styles.descriptionText}>
          Protect your data, always. Encrypt your internet traffic and mask your IP address, keeping your online activity private and safe.
        </Text>
        
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        
        <TouchableOpacity style={styles.circleButton} onPress={handleNext}>
          <Text style={styles.circleText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  mapImage: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 21,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 200,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circleButton: {
    backgroundColor: '#007bff',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  circleText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageForeground: {
    width: width * 0.9,  // Adjust the width as needed
    height: height * 0.4, // Adjust the height as needed
    position: 'absolute',
    top: '10%',
    left: '5%',
    resizeMode: 'contain',
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 30, // Adjust the space between the dots and the button
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
});

export { VpnPage, FirstPage, SecondPage };
