import React from 'react';
import { ActivityIndicator, StyleSheet, Text, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';

import { Input } from './Input';
import { Button } from './Button';
import LessonsScreen from './LessonsScreen';
import AboutScreen from './AboutScreen';

import { DrawerNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';

 const firebaseConfig = {
      apiKey: 'AIzaSyDBVrh8jsJfiV22Blke390nNERBzJeCvlY',
      authDomain: 'delyohaidutin-d4d85.firebaseapp.com',
      databaseURL: 'https://delyohaidutin-d4d85.firebaseio.com',
      projectId: 'delyohaidutin-d4d85',
      storageBucket: '',
    };

    

export default class SignUpScreen extends React.Component {
	state = {
	    email: '',
	    password: '',
	    authenticating: false,
  	}


	render(){
		return (
      <ScrollView style={styles.form}>
       <Input 
        placeholder='Enter your email...'
        label='Ime'
       />
        <Input 
        placeholder='Enter your email...'
        label='Familia'
       />
       <Input 
        placeholder='Enter your email...'
        label='Telefon'
       />
        <Input 
        placeholder='Enter your email...'
        label='Email'
       />
        <Input 
        placeholder='Enter your password...'
        label='Password'
        secureTextEntry
        />
        <Input 
        placeholder='Enter your email...'
        label='Grad'
       />
       <Input 
        placeholder='Enter your email...'
        label='Postcode'
       />
       <Input 
        placeholder='Enter your email...'
        label='Address'
       />
       <Input 
        placeholder='Enter your email...'
        label='DateofBirth'
       />
        <Button 
        onPress={()=> this.signUpUser(this.state.email, this.state.password)}> SIGN UP </Button>
      </ScrollView>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  form: {
    flex: 1 
  }
});