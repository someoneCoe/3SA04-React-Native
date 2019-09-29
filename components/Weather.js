import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated, ImageBackground } from "react-native";
import Forecast from "./Forecast";
export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forecast:{
                location:'-',
                main: '-',
                description: '-',
                humidity: 0,
                temp: 0,
                wind: 0,
                pressure: 0,
            }
        }
    }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((respose) => respose.json())
        .then((json) => {
            console.log(json)
                this.setState(
                {
                    forecast:{
                        location: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity,
                        wind: json.wind.speed,
                        pressure: json.main.pressure,

                    }
                }
            );
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    
    componentDidMount = () => this.fetchData()

    componentDidUpdate = (prevProps) =>{
        if(prevProps.zipCode !== this.props.zipCode){
            this.fetchData()
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <Text style={styles.zipcode}>Zip code is {this.props.zipCode}</Text>
                    <Forecast {...this.state.forecast}/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backdrop:{
       
        width:'100%',
        height: '100%',
        alignItems: 'center',
    },
    zipcode:{
        backgroundColor: 'black',
        color: 'red',
        opacity: 0.75,  
        fontSize : 30,
        paddingTop: 28,
    }

  });