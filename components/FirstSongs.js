import React from 'react';
import { Alert, ActivityIndicator, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';

import { Suita1Navigation } from './Suita1Navigation';
import { BasicsNavigation } from './BasicsNavigation';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from './TabNavigation';

export default class FirstSongs extends React.Component {
	_onPress1 = () => {
		this.props.navigation.navigate('Karadja');
	}
	_onPress2 = () => {
		this.props.navigation.navigate('Ripni');
	}
	_onPress3 = () => {
		this.props.navigation.navigate('Otishla');
	}
	_onPress4 = () => {
		this.props.navigation.navigate('Pokachila');
	}
	_onPress5 = () => {
		this.props.navigation.navigate('Sitneji');
	}
	render(){
		return (
			<View style={ {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			} }>
				<Button rounded success
				onPress={this._onPress1}
				style = {styles.button}>
						<Text style={ {
							color: 'white',
							padding: 20,
							fontSize: 18,
						}} >
							Kundisal mi e karadja
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPress2}
				style = {styles.button}>
						<Text style={ {
							color: 'white',
							padding: 20,
							fontSize: 18,
						}} >
							Ripni Kalinke
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPress3}
				style = {styles.button}>
						<Text style={ {
							color: 'white',
							padding: 20,
							fontSize: 18,
						}} >
							Otishla mi e stanina maika
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPress4}
				style = {styles.button}>
						<Text style={ {
							color: 'white',
							padding: 20,
							fontSize: 18,
						}} >
							Pokachila se todora
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPress5}
				style = {styles.button}>
						<Text style={ {
							color: 'white',
							padding: 20,
							fontSize: 18,
						}} >
							Sitneji
						</Text>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		marginBottom: 20,
		width: "100%",
		alignItems: 'center',
	},
});