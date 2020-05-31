import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signInSubmit } from '../../store/actions/auth-actions';
import InputField from '../components/input';
import ButtonForm from '../components/button';
import fields from '../components/Fields/Login/fields';
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

const Login = ({ signIn, auth, navigation }) => {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();
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

  const onSubmit = (val) => signIn(val);

  useEffect(() => {
    if (auth.data) {
      switch (auth.data.meta.status) {
        case 'success':
          navigation.navigate('Home');
          break;
        case 'error':
          Alert.alert('Login Error', auth.data.meta.message);
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
      <ButtonForm
        loading={(auth.loading)}
        onPress={handleSubmit(onSubmit)}
      >
        {`${auth.loading ? 'Loading' : 'Login'}`}
      </ButtonForm>
      <Text style={{ marginTop: 20 }}>Don't have an account?</Text>
      <Text style={{ marginTop: 10, color: '#667EB5' }} onPress={() => navigation.navigate('Trail Buddy | Sign Up')}>Sign up here!</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  signIn: signInSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
