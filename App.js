import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Dette er App.js filen</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
