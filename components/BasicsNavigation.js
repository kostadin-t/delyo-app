import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Naduvane from './Naduvane';
import Ustroistvo from './Ustroistvo';
import Basics from './Basics';
import Gaidunica from './Osnovi/Gaidunica';
import Uprajnenie1 from './Osnovi/Uprajnenie1';
import Uprajnenie1udar from './Osnovi/Uprajnenie1udar';
import Uprajnenie2udara from './Osnovi/Uprajnenie2udara';
import Uprajnenie2 from './Osnovi/Uprajnenie2';
import Uprajnenie3 from './Osnovi/Uprajnenie3';
import Uprajnenie4 from './Osnovi/Uprajnenie4';
import Trioli from './Osnovi/Trioli';

import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';

export const BasicsNavigation = DrawerNavigator({
	Basics: {
		screen: Basics
	},
	Ustroistvo: {
		screen: Ustroistvo
	},
	Naduvane: {
		screen: Naduvane
	},
	Gaidunica: {
		screen: Gaidunica
	},
	Uprajnenie1: {
		screen: Uprajnenie1
	},
	Uprajnenie1udar: {
		screen: Uprajnenie1udar
	},
	Uprajnenie2udara: {
		screen: Uprajnenie2udara
	},
	Uprajnenie2: {
		screen: Uprajnenie2
	},
	Uprajnenie3: {
		screen: Uprajnenie3
	},
	Uprajnenie4: {
		screen: Uprajnenie4
	},
	Trioli: {
		screen: Trioli
	},
});