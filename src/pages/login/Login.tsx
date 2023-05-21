import * as React from 'react';
import {  TextInput } from 'react-native-paper';
import loginStyle from './styleLogin';
import { View } from 'react-native';


const LoginComponent = ({ navigation }) => {
  const [text, setText] = React.useState('');

  return (
    <View style={loginStyle.container}>
        <TextInput style={loginStyle.input}
              mode="outlined"
              label="CPF ou RGM"
              placeholder="Ex: 12345678900"
              right={<TextInput.Affix text="/11" />} />

            <TextInput style={loginStyle.input}
              mode="outlined"
              label="Senha"
              placeholder=""
              textContentType='password' />

              
      </View>
  );
};



export default LoginComponent;