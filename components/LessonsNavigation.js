import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Input } from './Input';
import { Button } from './Button';
import LessonsScreen from './LessonsScreen';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import { BonusiNavigation } from './BonusiNavigation';

import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from './TabNavigation'; 
import { BasicsNavigation } from './BasicsNavigation';
import { Suita1Navigation } from './Suita1Navigation';


export const LessonsNavigation = TabNavigator({
	Basics: {
	screen: BasicsNavigation,
	},
	Suita1: {
	screen: Suita1Navigation,
	},
	Bonusi: {
		screen: BonusiNavigation,
	},
});



