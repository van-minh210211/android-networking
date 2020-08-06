import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <TextInput style={styles.textInput} ></TextInput>
        <Text>pass</Text>
        <TextInput style={styles.textInput} ></TextInput>
        <TouchableOpacity style ={styles.button}><Text>login</Text></TouchableOpacity>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  textInput : {
    width:'90%',
    color: '#deb887',
    borderRadius:2,
    borderWidth:2,
  },
  button : {
    borderRadius:2,
    borderWidth:2,
  }
})
