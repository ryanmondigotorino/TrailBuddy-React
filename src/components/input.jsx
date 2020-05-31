import React, { useEffect } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: windowWidth - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)', 
    marginHorizontal: 25,
  }
});

const InputField = ({
  placeholder,
  password = false,
  name,
  setValue,
  register,
}) => {
  useEffect(() => {
    register(name);
  }, [register]);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={password}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        underlineColorAndroid="transparent"
        onChangeText={(val) => setValue(name, val)}
      />
    </View>
  );
};

export default (InputField);
