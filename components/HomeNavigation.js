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

export const HomeNavigation = TabNavigator({
	Home: {
		screen: HomeScreen,
		
	},
	SignUpScreen: {
		screen: SignUpScreen,
	},
});