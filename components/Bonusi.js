import React from 'react';
import { Alert, ActivityIndicator, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';

import { Suita1Navigation } from './Suita1Navigation';
import { BasicsNavigation } from './BasicsNavigation';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from './TabNavigation';



export default class Bonusi extends React.Component {
	_onPress1 = () => {
		this.props.navigation.navigate('Nastroika');
	}
	_onPress2 = () => {
		this.props.navigation.navigate('Poddrajka');
	}
	_onPress3 = () => {
		this.props.navigation.navigate('Istoriq');
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
							Nastroika
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
							Poddrajka
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
							Istoriq na gaidata
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