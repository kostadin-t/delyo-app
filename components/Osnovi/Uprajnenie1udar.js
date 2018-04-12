import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';


import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from '../TabNavigation';
import { BasicsNavigation } from '../BasicsNavigation';


export default class Uprajnenie1udar extends React.Component {
	_onPressBack = () => {
		this.props.navigation.navigate('Uprajnenie1')
	}
	_onPressNext = () => {
		this.props.navigation.navigate('Uprajnenie2udara')
	}
	render(){
		return (
			<View>
				<Header>
					<Button 
			          iconLeft light
			          onPress={this._onPressBack}
			           >
			            <Icon name='arrow-back' />
			            <Text>Back</Text>
			         </Button>
					<Content>
			          
			        </Content>
			        <Button iconRight light
			          style={ { 
			          	marginLeft: 30,
			          } }
			          onPress={this._onPressNext}>
			            <Text>Next</Text>
			            <Icon name='arrow-forward' />
			         </Button>
				</Header>
				<Text>Uprajnenie1udar</Text> 
			</View>
		);
	}
}