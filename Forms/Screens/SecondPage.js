import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

 
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

        <Button
          title="Confirmar"
          
          onPress={() =>
            navigate('ThirdPage', {
              

            })

            
          }

 
        />
      
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
});
