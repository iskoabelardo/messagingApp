import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage, createLocationMessage } from './utils/MessageUtils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        createImageMessage(require('./assets/iu_bonnet.jpg')),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createLocationMessage({
          latitude: 14.6488,
          longitude: 121.0509,
        }),
      ],
    };
  }

  handlePressMessage = () => {
    // Implement what should happen when a message is pressed
  };

  renderMessageList() {
    const { messages } = this.state;
    return (
      <View style={styles.messageContent}>
        <MessageList messages={messages} 
        onPressMessage={this.handlePressMessage} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderMessageList()}
        <View style={styles.toolbarSpace}>
          <Text> Isko Abelardo </Text>
        </View>
        <View style={styles.inputMethod}>
          <Text> SADBOYS WORLDWIDE </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  messageContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethod: {
    flex: 1, 
    backgroundColor: '#F9A4EC',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  toolbarSpace: {
    borderTopWidth: 1, 
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#72D4F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  }
});
