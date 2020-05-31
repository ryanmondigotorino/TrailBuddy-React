import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signUpSubmit } from '../../store/actions/auth-actions';
import InputField from '../components/input';
import ButtonForm from '../components/button';
import fields from '../components/Fields/Login/register-field';
import { useForm } from 'react-hook-form';

import {
  View,
  StyleSheet,
  Image,
  Alert,
  Text,
} from 'react-native';

import logo from '../../assets/base/trail-buddy-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD6AD'
  },
  logo: {
    width: 220,
    height: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
});

const SignUp = ({ signUp, auth, navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const renderFields = () => fields.map((field) => (
    <InputField
      key={field.id}
      name={field.name}
      placeholder={field.placeHolder}
      password={field.secureTextEntry}
      setValue={setValue}
      register={register}
    />
  ));

  const onSubmit = (val) => signUp(val);

  useEffect(() => {
    if (auth.signUpData) {
      const { signUpData } = auth;
      switch (signUpData.meta.status) {
        case 'success':
          Alert.alert('Sign up success', signUpData.meta.message);
          navigation.navigate('Trail Buddy | Login');
          break;
        case 'error':
          const message = Array.isArray(signUpData.meta.message) ? (signUpData.meta.message).join() : signUpData.meta.message;
          Alert.alert('Sign up error', message);
          break;
        default:
          break;
      }
    }
  }, [auth]);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      {renderFields()}
      <View style={{ marginTop: 30 }}/>
      <ButtonForm
        loading={(auth.loading)}
        onPress={handleSubmit(onSubmit)}
      >
        {`${auth.loading ? 'Loading' : 'Sign up'}`}
      </ButtonForm>
      <Text style={{ marginTop: 10, color: '#667EB5' }} onPress={() => navigation.navigate('Trail Buddy | Login')}>Back to login</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  signUp: signUpSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
