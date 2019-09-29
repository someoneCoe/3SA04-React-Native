import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import React, { Component } from "react";

const availbleZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Si Thammarat', code: '80110' },
    { place: 'ฺBankok', code: '10100' },
    
]


const ZipItem = ({place,code,navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
        <View style={styles.zipList}>
            <View style={styles.zipItem}>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
                </View>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = {
        title: 'Choose a zip code',
      };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <FlatList
                    data ={availbleZipItems}
                    keyExtractor = {_keyExtractor}
                    renderItem = {
                        ({item}) => <ZipItem {...item} navigate={navigate}/>      
                    }              
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    zipList:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    zipItem: {
     flexDirection:'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 10,
      backgroundColor:'black'
    },
    zipPlace:{
        flex: 2,
        fontSize:15,
        color:"white"
    },
    zipCode:{
        color:"white",
        fontSize:15,
        
    }

  });