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
      
        <TextInput>
        <Text style={styles.ItemStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>
        </TextInput>

        </TouchableOpacity>
        

        </ScrollView>
        


        </View>
        <Text>   </Text>
       
        <View style={styles.Buttonstyle}>

        
        <Button
          title="Confirmar" 
          
          
          
          onPress={() =>
            navigate('ThirdPage',{
            JSON_ListView_Clicked_Item:
            
            <Text style={styles.ItemStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>

            }
            )
          }

 
        />

        <Text>   </Text>
         
         <Button
          title="Cancelar" 
          color="red"
          
          
          
          onPress={() =>
            navigate('FirstPage')

            
          }

 
        />


        </View>

      
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
    alignItems:'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
  },
  ItemStyle:{
    backgroundColor:'white',


  },
  BigListStyle:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    


  },

  Buttonstyle :{
    flexDirection:'row',
    justifyContent: 'space-around',


  }

});
