import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Input } from './Input';
import { Button } from './Button';
import LessonsScreen from './LessonsScreen';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { HomeNavigation } from './HomeNavigation';

export const Tabs = TabNavigator({
	Login: {
		screen: HomeScreen,
		navigationOptions: {
    		tabBarVisible: true,
  		}
	},
	FAQ: {
		screen: AboutScreen,
	},
	SignUpScreen: {
		screen: SignUpScreen,
		navigationOptions: {
    		
  		}
	},

});