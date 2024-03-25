/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../theme/color';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../utils/routes';
import {useDispatch} from 'react-redux';
import {postRegister} from '../redux/authAction';

export default function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = {
    email: email,
    username: username,
    password: password,
  };

  const handleRegister = () => {
    if (!email || !username || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    navigation.navigate(SCREEN.LOGIN);
    dispatch(postRegister(data));
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE, padding: 20}}>
      <Text
        style={{paddingBottom: 10, color: COLOR.DARK_GRAY, fontWeight: 'bold'}}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
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
        value={password}
        onChangeText={setPassword}
        type="password"
      />
      <Button title={'Sign Up'} onPress={handleRegister} />
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
