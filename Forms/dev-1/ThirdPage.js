import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

 
export default class ThirdPage extends Component {
  
  
  

  static navigationOptions = {

    
    title: 'Mis Reservas:',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
     
      <View style={styles.container}>
        <Text>
          Su reserva está en proceso:
        </Text>
     
        
        <Text style={styles.TextStyle}>
         
        </Text>
        
        <TouchableOpacity 
         onPress={() =>
          navigate('MainPage')

          
        }

        >
      
        <Text style={styles.ItemStyle}>
          Ir a Página de espera 
        </Text>
        

        </TouchableOpacity>
        
        
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fdf2b8', 
    position:'absolute',  
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent:'center',
    alignItems:'center'
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
  },
});
