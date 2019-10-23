import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      Nombre: '',
      Email: '',
      Teléfono:'',
      Comensales: '',
      Fecha:'',
      Hora:''
   }
   handleName = (text) => {
      this.setState({ Nombre: text })
   }
   handlePassword = (text) => {
      this.setState({ Email: text })
      
   }
   handleTelefono = (text) => {
    this.setState({Teléfono: text })
    
 }

 handleComensales= (text) => {
    this.setState({ Comensales: text })
    
 }

 handleFecha = (text) => {
    this.setState({Fecha: text })
    
 }

 handleHora= (text) => {
    this.setState({ Hora: text })
    
 }

   login = (Nombre, Email, Teléfono, Comensales, Fecha, Hora) => {
      alert('Nombre: ' + Nombre + ' Email: ' + Email + ' Telefóno: ' + Teléfono + ' Comensales: ' + Comensales + ' Fecha: ' + Fecha + ' Hora: ' + Hora)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Nombre"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Teléfono"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handleTelefono}/>

            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Comensales"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handleComensales}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Fecha"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handleFecha}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Hora"
               placeholderTextColor = "green"
               autoCapitalize = "none"
               onChangeText = {this.handleHora}/>
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.Nombre, this.state.Email, this.state.Teléfono, this.state.Comensales,this.state.Fecha,this.state.Hora)
               }>
               <Text style = {styles.submitButtonText,{textAlign:'center'}}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 5,
      height: 40,
      borderColor: 'green',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'green',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
