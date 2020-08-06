
import React, { Component } from 'react';
import { Text, StyleSheet, View,Image, TextInput, TouchableOpacity ,Alert, Button} from 'react-native';

export default function Login ({navigation}){
        return (
            <View style={styles.view}>
            <Image source={require('../Image/fpt.jpg')}/>
            <TextInput   placeholder="Username" style={styles.uses}></TextInput>
            <TextInput placeholder="Password" style={styles.uses}></TextInput>
            {/* <TouchableOpacity  onPress={() => navigation.navigate("Main")}>
                <Text>login</Text>
            </TouchableOpacity> */}
            <Button onPress={() => navigation.navigate('Main')} title="Button"/>
            </View>
           
      
        )
}

const styles = StyleSheet.create({
    uses : {
        borderWidth :2,
        color : "red",
        fontSize : 20,
        borderBottomColor: 'gray',
        borderRadius : 55,
        width: '100%',
    },
    view : {
        alignItems : "center",
    }
})
