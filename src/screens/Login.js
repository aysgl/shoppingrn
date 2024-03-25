/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../theme/color';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import {getRegister, postLogin} from '../redux/authAction';

export default function Login() {
  const state = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getRegister());
  }, [dispatch]);

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
      id: '41b6',
    };

    if (state.auth.id === data.id) {
      dispatch(postLogin(data));
      navigation.navigate(SCREEN.CART);
    } else {
      console.log('User not found');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE, padding: 20}}>
      <Text
        style={{paddingBottom: 10, color: COLOR.DARK_GRAY, fontWeight: 'bold'}}>
        Username
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <Text
        style={{paddingBottom: 10, color: COLOR.DARK_GRAY, fontWeight: 'bold'}}>
        Password
      </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>If you don't have an account yet, you can</Text>
          <TouchableOpacity
            disabled={username && password ? true : false}
            onPress={() => navigation.navigate(SCREEN.REGISTER)}>
            <Text style={{textDecorationLine: 'underline'}}> create now.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title={'Login'} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: COLOR.GRAY,
  },
});
