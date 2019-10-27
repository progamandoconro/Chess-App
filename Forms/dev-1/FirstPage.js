import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
export default class FirstPage extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      username: '',
      phone:'',
      email:'',
      comensales:'',
      fecha:'',
      hora:'',
      
    };
  
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Reservar:',
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>

      <View style={styles.container}>
 
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={' Nombre: '}
          style={styles.input}
          

        />

        <TextInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
          placeholder={' Teléfono: '}
          style={styles.input}
          

        />

        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={' Email: '}
          style={styles.input}      

        />

        <TextInput
          value={this.state.comensales}
          onChangeText={comensales => this.setState({ comensales })}
          placeholder={' Comensales: '}
          style={styles.input}
          
        />
       
        <TextInput
          value={this.state.fecha}
          onChangeText={ fecha => this.setState({ fecha })}
          placeholder={' Fecha: '}
          style={styles.input}
          

        />

        <TextInput
          value={this.state.hora}
          onChangeText={hora => this.setState({ hora })}
          placeholder={' Hora: '}
          style={styles.input}
          
        />
              
        <Button
          title="Reservar"
          
          onPress={() =>
            navigate('SecondPage', {
              JSON_ListView_Clicked_Item: " Nombre: "+ this.state.username +  " Email: " + this.state.email  + " Comensales: " + this.state.comensales+ " Fecha: " + this.state.fecha+  " Hora: "+this.state.hora,

            })
            
          }
 
        />

      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {
    flex:1,
    padding: 1,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
    
  },
  

});
