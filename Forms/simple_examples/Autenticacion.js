import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Container, Content, Heaer, Form, Input, Item, Button, Label} from 'native-base'

import * as firebase from 'firebase'
import {firebaseConfig} from './config.js'
firebase.initializeApp(firebaseConfig);

export default class App extends Component  {

  constructor (props){
    super (props)

    this.state = ({
      email:"",
      password:""
    })
}
signUpUser = (email, password) => {
try {

   if (this.state.password.length<6)
   {
     alert ("Por favor contraseña de más de 6 dígitos")
   }
   }
   catch (error) {
     console.log (error.toString)
   }
}
  loginUser = (email, password) => {

  }
render() {
    return (
      <Container style={styles.container}>
        <Form>
        <Item floatingLabel>
        <Label>Email</Label>
        <Input
          autocorrect={false}
          autoCapitalize="none"
          onChangeText={(email)=> this.setState({email})}
        />
        </Item>
        <Item floatingLabel>
        <Label>Password</Label>
        <Input
          secureTextEntry={true}
          autocorrect={false}
          autoCapitalize="none"
          onChangeText={(password)=> this.setState({password})}
        />
        </Item>
        <Button style={{ marginTop:10}}
          full
          rounded
          success
          onPress={()=> this.loginUser(this.state.email,this.state.password)}
          >
            <Text style={styles.container}> Log in </Text>
          </Button>

        <Button style={{ marginTop:10}}
          full
          rounded
          success
          onPress={()=> this.signUpUser(this.state.email,this.state.password)}
          >
            <Text style={styles.container}> Sing Up </Text>
          </Button>
        </Form>
      </Container>
    )

}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'

  },
});
