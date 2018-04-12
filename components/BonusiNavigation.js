import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Nastroika from './Bonuses/Nastroika';
import Poddrajka from './Bonuses/Poddrajka';
import Istoriq from './Bonuses/Istoriq';
import Bonusi from './Bonusi';


import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';

export const BonusiNavigation = DrawerNavigator({
	Bonusi: {
		screen: Bonusi
	},
	Nastroika: {
		screen: Nastroika
	},
	Poddrajka: {
		screen: Poddrajka
	},
	Istoriq: {
		screen: Istoriq
	},
});