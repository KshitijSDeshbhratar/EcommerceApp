import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import InputTextComponent from '../components/InputText/InputTextComponent';
import {loginUser} from '../../../api/User';
import HeaderImage from '../components/LoginComponents/HeaderImage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = email.length < 5 || password.length < 8
  const [error, setError] = useState('');
  const handleRegister = () => {
    navigation.navigate('Signup');
  };
  const handleToHomeScreen = () => {
    if (email === 'admin' && password === 'admin123') {
      setError('');
      navigation.navigate('HomeScreen');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderImage />
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <InputTextComponent
      value={email}
        placeholder={'Username'}
        inputIcon={'user'}
        onChangeText={setEmail}
      />
      <InputTextComponent
        placeholder={'Password'}
        inputIcon={'lock'}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Pressable
        disabled = {isDisabled}
        style={[styles.signInBtnContainer, {opacity: isDisabled ? 0.5 : 1}]}
        onPress={handleToHomeScreen}>
        <Text style={styles.signInBtnText}>Sign In</Text>
        <LinearGradient
          colors={['#F97794', '#623AA2']}
          style={styles.linearGradient}>
          <AntDesign name={'arrowright'} size={24} color={'white'} />
        </LinearGradient>
      </Pressable>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.create}>Create</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.footerImageContainer}>
        <ImageBackground
          style={styles.footerImage}
          source={require('../assets/images/bottomLogin.png')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    position: 'relative',
  },
  create: {textDecorationLine: 'underline'},

  helloContainer: {},
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
    color: '#262626',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#262626',
    marginBottom: 30,
  },
  inputTextContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 20,
    elevation: 10,
    alignItems: 'center',
    height: 50,
  },
  usernameInput: {
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  forgotPasswordText: {
    color: '#BEBEBE',
    textAlign: 'right',
    width: '90%',
  },
  signInBtnContainer: {
    flexDirection: 'row',
    marginTop: 120,
    width: '90%',
    justifyContent: 'flex-end',
  },
  signInBtnText: {
    color: '#262626',
    fontSize: 25,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 120,
  },
  footerImageContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  footerImage: {
    height: 350,
    width: 150,
  },
  error: {
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 24,
    textAlign: 'center',
    marginTop: 24,
  },
});
