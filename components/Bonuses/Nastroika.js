import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, WebView, Platform } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';
import Iframe from 'react-iframe';


const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
  
});

export default class Nastroika extends React.Component {
	_onPressBack = () => {
		this.props.navigation.navigate('Bonusi')
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
				</Header>
				<Text>Nastroika na gaidata</Text> 
				<WebView
        			javaScriptEnabled={true}
        			domStorageEnabled={true}
        			source={{uri: 'https://www.youtube.com/embed/I8oiRIVWGtY'}}        			
        			style={ styles.WebViewContainer }
      			/>
				
			</View>
		);
	}
}