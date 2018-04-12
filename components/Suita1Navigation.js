import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import FirstSongs from './FirstSongs';
import Karadja from './Songs/Karadja';
import Ripni from './Songs/Ripni';
import Otishla from './Songs/Otishla';
import Pokachila from './Songs/Pokachila';
import Sitneji from './Songs/Sitneji';


import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';

export const Suita1Navigation = DrawerNavigator({
	Suita1: {
		screen: FirstSongs
	},
	Karadja: {
		screen: Karadja
	},
	Ripni: {
		screen: Ripni
	},
	Otishla: {
		screen: Otishla
	},
	Pokachila: {
		screen: Pokachila
	},
	Sitneji: {
		screen: Sitneji
	},
});