import React from 'react';
import { ActivityIndicator, StyleSheet, Dimensions, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';

import { Input } from './components/Input';
import { Button } from './components/Button';
import LessonsScreen from './components/LessonsScreen';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import { TopNavigation } from './components/Router';

import { DrawerNavigator } from 'react-navigation';
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


export default class App extends React.Component {

  state = {
    email: '',
    password: '',
    authenticating: false,
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
      <View style={styles.container}>
        <TopNavigation />
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  form: {
    flex: 1, 
  }
});
