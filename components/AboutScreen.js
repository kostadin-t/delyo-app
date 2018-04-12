import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Icon, Button, Container, Header, Content } from 'native-base';


export default class AboutScreen extends React.Component {
	render(){
		return (
			<Container>
				<Content>
					<Text>AboutScreen</Text> 
				</Content>
			</Container>
		);
	}
}