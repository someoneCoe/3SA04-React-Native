import Weather from "./Weather";
import React, { Component } from "react";
import {Button} from"react-native";

//  const navigation = this.props.navigation

export default class WeatherScreen extends React.Component{
    
    static navigationOptions = ({navigation}) => {
        return{
            headerTitle: 'Weather',
            headerRight: <Button   
            title="Change ZipCode" onPress={() => {navigation.navigate('ZipCode')}} style={{ marginTop: 10, padding: 10}}/>
        }  
    }

    render(){
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode}/>)
    };
}

