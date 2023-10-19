import { StyleSheet, Text, View } from 'react-native';
import Status from './components/StatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Status/>
      <View style={styles.messageContent}>
      </View> 
      <View style={styles.toolbarSpace}>
        <Text>Isko Abelardo</Text>
      </View>
      <View style={styles.inputMethod}>
        <Text>SADBOYS</Text>
      </View>
    </View>
    
  );
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
    backgroundColor: 'orange',
    padding: 15,
  },
  toolbarSpace: {
    borderTopWidth: 1, 
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'pink',
    padding: 15
  },
  // messageText: {
  //   marginTop: 50,
  //   padding: 10,
  //   alignSelf: 'center',
  //   //justifyContent: 'center',
  //   textAlign: 'center',
  //   backgroundColor: 'red',
  //   color: 'white',
  //   borderRadius: 20,
  // }
});
