import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

 
export default class ThirdPage extends Component {
  static navigationOptions = {
    title: 'Lista de Reservas: ',
};
render() {
    const { navigate } = this.props.navigation;
    return (

    <View >
     <Text>
        Su solicitud está en proceso, gracias. 

    </Text>  

    </View>
   
    )

}}
