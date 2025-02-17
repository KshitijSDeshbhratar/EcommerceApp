import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { createUser } from '../../api/User';
import InputTextComponent from '../components/InputText/InputTextComponent';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Signup');
  };

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [mobileNo, setMobileNo] = useState('');
const [success, setSuccess] = useState('');
const [error, setError] = useState('');



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../assets/images/topLogin.png')}
          style={styles.image}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}
            margin={15}>
            <AntDesign name={'arrowleft'} size={40} color={'white'} />
          </Pressable>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.createAccountText}>Create an account</Text>
      </View>
      <InputTextComponent
      placeholder={'First & Last Name'}
      inputIcon={'user'}
      onChangeText={
      (value) => {
        setName(value);
      }
      }/>

      <InputTextComponent
        placeholder={'Password'}
        inputIcon={'lock'}
        secureTextEntry={true}
        onChangeText={
          (value) => {
            setPassword(value);
          }
          }
      />
      <InputTextComponent
      keyboardType={'email-address'}
      placeholder={'E-mail'}
      inputIcon={'envelope'}
      onChangeText={
        (value) => {
          setEmail(value);
        }
        }/>
      <InputTextComponent
      keyboardType={'phone-pad'}
      placeholder={'Mobile'}
      inputIcon={'phone'}
      onChangeText={
        (value) => {
          setMobileNo(value);
        }
        }/>
        {error.length > 0  && <Text style = {styles.error}>{error}</Text>}
        {success.length > 0  && <Text style = {styles.success}>{success}</Text>}

      <Pressable
      disabled={name.length <= 2 || email.length <= 5 || password.length < 8}
      style={
        styles.signInBtnContainer
      }
      onPress={
        async () =>{
          let user = await createUser(name,email,password);
          if(user.error){
            setError(user.error);
          }
          else{
            setError('');
            setSuccess('You have successfully registered');
            setTimeout(() => navigation.goBack(),3000);
          }
          }
          }
          >
        <Text style={styles.signInBtnText}>Create</Text>
        <LinearGradient
          colors={['#F97794', '#623AA2']}
          style={styles.linearGradient}>
          <AntDesign name={'arrowright'} size={24} color={'white'} />
        </LinearGradient>
      </Pressable>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>
            Or create account using social media
          </Text>
          <View style={styles.socialMediaContainer}>
            <Entypo
              name={'facebook-with-circle'}
              size={30}
              color={'#3B5998'}
              style={styles.socialIcon}
            />
            <Entypo
              name={'twitter-with-circle'}
              size={30}
              color={'#55ACEE'}
              style={styles.socialIcon}
            />
            <AntDesign
              name={'google'}
              size={30}
              color={'#4285F4'}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerImageContainer}>
        <ImageBackground
          style={styles.footerImage}
          source={require('../assets/images/bottomLogin.png')}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    position: 'relative',
  },
  imageContainer: {flexDirection: 'row'},
  image: {
    width: '100%',
    height: 130,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#262626',
    marginBottom: 30,
    fontWeight: 'bold',
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
    marginTop: 40,
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
    marginTop: 100,
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
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    backgroundColor: 'white',
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
  error:{
    fontSize:16,
    color:'#FF0000',
    marginBottom:24,
  },
  success:{
    fontSize:16,
    color:'#28a745',
    marginBottom:24,
  },
});
