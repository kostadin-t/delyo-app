import React from 'react';
import { ActivityIndicator, StyleSheet, Text, Dimensions, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';

import { Input } from './Input';
import { Button } from './Button';
import LessonsScreen from './LessonsScreen';
import AboutScreen from './AboutScreen';

import { DrawerNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';


    const height = Dimensions.get('window').height;


    const firebaseConfig = {
      apiKey: 'AIzaSyDBVrh8jsJfiV22Blke390nNERBzJeCvlY',
      authDomain: 'delyohaidutin-d4d85.firebaseapp.com',
      databaseURL: 'https://delyohaidutin-d4d85.firebaseio.com',
      projectId: 'delyohaidutin-d4d85',
      storageBucket: '',
    };

    firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {



  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user != null) {
        console.log(user)
      }
    })
   }

  signUpUser = (email, password) => {
    try{
      if(this.state.password.length<6) {
        alert("Please enter at least 6 characters!")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)

    }
    catch(error){
      console.log(error.toString())
    }

  }

  loginUser = (email, password) => {
    try{

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user){console.log(user)})
    }
    catch(error){
      alert(error.toString())
      return;
    }


    this.props.navigation.navigate('Lessons');
  }

  signUpPress = () => {
      this.props.navigation.navigate('SignUpScreen')
    }

  async loginWithFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('187126808738150', {permissions: ['public_profile'] })
    this.props.navigation.navigate('Lessons')
    if(type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error)=> {
        console.log(error)
      })
      this.props.navigation.navigate('Lessons')
    }
  }

   onPressSignIn() {
    this.setState({
      authenticating: true,
    });
   }

   renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View style={styles.form}>
        <Input 
        placeholder='Enter your email...'
        label='Email'
        onChangeText ={email => this.setState({ email })}
        value={this.state.email}/>
        <Input 
        placeholder='Enter your password...'
        label='Password'
        secureTextEntry
        onChangeText ={password => this.setState({ password })}
        value={this.state.password}/>

        <Button 
        onPress={()=> this.loginUser(this.state.email, this.state.password)}> LOGIN </Button>
        <Button 
        onPress={()=> this.signUpPress()}> SIGN UP </Button>
      </View>

      
    )
   }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
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