import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, WebView, Platform } from 'react-native';
import { Icon, Left, Button, Container, Header, Content } from 'native-base';


const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }
  
});

export default class Istoriq extends React.Component {
	render(){
		return (
			<View style={{ height: 300 }}>
				<Header>
					<Content>
			          
			        </Content>
				</Header>
				<Text>Nastroika na gaidata</Text> 
				<WebView
        			javaScriptEnabled={true}
        			domStorageEnabled={true}
        			source={{uri: 'https://www.youtube.com/embed/JgKM7KiwmL0'}}        			
        			style={ styles.WebViewContainer }
      			/>
			</View>
		);
	}
}