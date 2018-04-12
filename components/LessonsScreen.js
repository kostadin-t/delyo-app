import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Icon, Button, Container, Header, Content } from 'native-base';
import { LessonsNavigation } from './LessonsNavigation';


export default class LessonsScreen extends React.Component {
	render(){
		return (
			<Container>
				<Content>
					<LessonsNavigation />
				</Content>
			</Container>
		);
	}
}