import React from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';


import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from './TabNavigation';
import { BasicsNavigation } from './BasicsNavigation';
import Ustroistvo from './Ustroistvo';

export default class Basics extends React.Component {

	_onPressButton1 = () => {
		this.props.navigation.navigate('Ustroistvo')
	}
	_onPressButton2 = () => {
		this.props.navigation.navigate('Naduvane')
	}
	_onPressButton3 = () => {
		this.props.navigation.navigate('Uprajnenie1')
	}
	_onPressButton4 = () => {
		this.props.navigation.navigate('Gaidunica')
	}
	_onPressButton5 = () => {
		this.props.navigation.navigate('Uprajnenie1udar')
	}
	_onPressButton6 = () => {
		this.props.navigation.navigate('Uprajnenie2udara')
	}
	_onPressButton7 = () => {
		this.props.navigation.navigate('Uprajnenie2')
	}
	_onPressButton8 = () => {
		this.props.navigation.navigate('Uprajnenie3')
	}
	_onPressButton9 = () => {
		this.props.navigation.navigate('Uprajnenie4')
	}
	_onPressButton10 = () => {
		this.props.navigation.navigate('Trioli')
	}

	render(){
		return (
			<ScrollView>
				<Button rounded success
				onPress={this._onPressButton1}
				style={styles.button} 
				>
				
						<Text style={styles.text}>
							Ustroistvo na gaidata
						</Text>
					
				</Button>
				<Button rounded success
				onPress={this._onPressButton2}
				style={styles.button}>
						<Text style={styles.text} >
							Naduvane
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton3}
				style={styles.button}>
						<Text style={styles.text} >
							Gaidunica
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton4}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie1
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton5}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie za edin udar
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton6}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie za dva udara
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton7}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie 2
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton8}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie 3
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton9}
				style={styles.button}>
						<Text style={styles.text} >
							Uprajnenie 4
						</Text>
				</Button>
				<Button rounded success
				onPress={this._onPressButton10}
				style={styles.button}>
						<Text style={styles.text} >
							Trioli
						</Text>
				</Button>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		marginBottom: 20,
		width: '100%',
		borderRadius: 40,
		alignItems: 'center',
	},
	text: {
		color: 'white',
		padding: 20,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	contentContainer: {
		flex: 1,
		
		
	},
});