import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';

import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { BasicsNavigation } from './BasicsNavigation';

export default class Naduvane extends React.Component {
	_onPressBack = () => {
		this.props.navigation.navigate('Ustroistvo')
	}
	_onPressNext = () => {
		this.props.navigation.navigate('Gaidunica')
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
				<Text>Nadui</Text> 
			</View>
		);
	}
}