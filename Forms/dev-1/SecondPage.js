import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';



export default class SecondPage extends Component {


  

  static navigationOptions = {
    
    title: 'Mis Reservas',
  };
  render() {
    
    const { navigate } = this.props.navigation;
   

    return (
     
      <View style={styles.container}>
        <Text>
          Su reserva:
        </Text>
     
        
        
         
         <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>
        


        
        <View style={styles.BigListStyle}>

        
        <ScrollView >
        
        <TouchableOpacity 
         onPress={() =>
          navigate('FirstPage')

          
        }

        >
      
        <Text style={styles.ItemStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>
        

        </TouchableOpacity>
        

        </ScrollView>
        


        </View>
        <View>
        <Button
          title="Confirmar" 
          
          
          
          onPress={() =>
            navigate('ThirdPage')

            
          }

 
        />
        </View>

      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
  },
  ItemStyle:{
    backgroundColor:"red"


  },
  BigListStyle:{
    flex:1,
    backgroundColor:"grey",
    alignItems:'center',
    justifyContent:'center',


  }

});
