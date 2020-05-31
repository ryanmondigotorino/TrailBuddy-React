import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  View,
} from 'react-native';

import loader from '../../assets/gif/loading.gif';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    width: windowWidth - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#667EB5',
    justifyContent: 'center',
    marginTop: 20,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)', 
    fontSize: 16,
    textAlign: 'center',
  },
  loader: {
    width: 20,  
    height: 20,
  }
});

const InputField = ({ children, onPress, loading }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.contentContainer}>
      {loading && <Image source={loader} style={styles.loader} />}
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

export default (InputField);
