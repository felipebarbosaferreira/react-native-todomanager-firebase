/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Felipe Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>

      // <SafeAreaView ref='main' style={styleFelipe.container}>
      //   <View ref='first'>
      //     <View style={styleFelipe.subView} />
      //     <View style={styleFelipe.subView} />
      //     <View style={styleFelipe.subView} />
      //   </View>
      //   <View ref='second'>
      //     <View style={styleFelipe.subView} />
      //     <View style={styleFelipe.subView} />
      //     <View style={styleFelipe.subView} />
      //   </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// const styleFelipe = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   first: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     margin: 40,
//     borderColor: 'red',
//     borderWidth: 1
//   },
//   second: {
//     flex: 2,
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     alignItems: 'flex-end',
//     margin: 40,
//     borderColor: 'red',
//     borderWidth: 1
//   },
//   subView: {
//     height: 50,
//     width: 50,
//     backgroundColor: 'skyblue'
//   }
// });