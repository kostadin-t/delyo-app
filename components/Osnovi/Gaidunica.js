import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, WebView, Platform } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';


import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import  { TabNavigator } from 'react-navigation';
import { Tabs } from '../TabNavigation';
import { BasicsNavigation } from '../BasicsNavigation';

const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
  
});

export default class Gaidunica extends React.Component {
	_onPressBack = () => {
		this.props.navigation.navigate('Naduvane')
	}
	_onPressNext = () => {
		this.props.navigation.navigate('Uprajnenie1')
	}
	render(){
		return (
			<View style={{ height: 300 }}>
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
				<Text>Gaidunica</Text> 
				<WebView
        			javaScriptEnabled={true}
        			domStorageEnabled={true}
        			source={{uri: 'https://www.youtube.com/embed/6VnsGn6FsYY'}}        			
        			style={ styles.WebViewContainer }
      			/>
			</View>
		);
	}
}