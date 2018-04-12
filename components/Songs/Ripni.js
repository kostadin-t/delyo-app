import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, WebView,  Platform } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';

import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from '../TabNavigation';
import { BasicsNavigation } from '../BasicsNavigation';
import { Suita1Navigation } from '../Suita1Navigation';

const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
  
});

export default class Ripni extends React.Component {
	_onPressBack = () => {
		this.props.navigation.navigate('Karadja')
	}
	_onPressNext = () => {
		this.props.navigation.navigate('Otishla')
	}
	render(){
		return (
			<View style={{ height: 300 }}>
				<Header>
					<Button 
			          iconLeft light
			          style={ { 
			          	marginRight: 30,
			          } }
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
				<Text>Ripni kalinke</Text> 
				<WebView
        			javaScriptEnabled={true}
        			domStorageEnabled={true}
        			source={{uri: 'https://player.vimeo.com/video/231916019'}}        			
        			style={ styles.WebViewContainer }
      			/> 
			</View>
		);
	}
}