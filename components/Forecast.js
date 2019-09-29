import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.location}</Text>
                <Text style={styles.text}>{this.props.main}</Text>
                <Text style={styles.text}>status : {this.props.description}</Text>
                <Text style={styles.text}>temperature : {this.props.temp} °C</Text>
                <Text style={styles.text}>humidity : {this.props.humidity}%</Text>
                <Text style={styles.text}>pressure : {this.props.pressure} mbar</Text>
                <Text style={styles.text}>wind : {this.props.wind} km/hr</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:2,
      flexDirection: 'column',
      
      alignItems: 'center',
    },
    backdrop:{
        width:'100%',
        height: '100%'
    },
    
    text:{
        fontSize: 30,
        color: 'white',
        marginBottom: 30,
        backgroundColor:'black',
        
    }

  });