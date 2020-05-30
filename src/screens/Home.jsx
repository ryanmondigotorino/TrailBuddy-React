import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Text, View } from 'react-native';
import { signInSubmit } from '../../store/actions/auth-actions';

const Home = ({ auth, signIn }) => {
  const [getAuth, setAuth] = useState();
  
  console.log({ auth });
  useEffect(() => {
    signIn({ size: 1 });
  }, []);
  
  return (
    <View>
      <Text>auth</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  signIn: signInSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
