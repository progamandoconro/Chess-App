import React from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import Emoji from 'react-native-emoji'
import { TouchableOpacity } from 'react-native-gesture-handler'



export default function App() {
  state = {
        fadeValue: new Animated.Value(2)
      };
    
      _start = () => {
        Animated.timing(this.state.fadeValue, {
          toValue: 1,
          duration: 1000
        }).start()
    }



  return (
    <View style={{
    flex:1,
    backgroundColor:'#fdf2b8', 
    position:'absolute',  
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent:'center',
    alignItems:'center'}} > 
          <Animated.View  >

          <TouchableOpacity onPress={() => this._start()}>  

          <Emoji 
          
          name = "pizza"
          style={{fontSize: 40, textAlign:'center'}} 
          
          /> 

          </TouchableOpacity> 
          <TouchableOpacity onPress={() => this._start()}>  
          <Emoji 
          
          name = "sushi"
          style={{fontSize: 40, textAlign:'center'}} 
          
          /> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => this._start()}>  

          <Emoji 
          
          name = "hamburger"
          style={{fontSize: 40, textAlign:'center'}} 
          
        
          /> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => this._start()}> 
                 
          <Emoji 
          
          name = "cactus"
          style={{fontSize: 80, textAlign:'center'}} 
          
          /> 

          <Text style={{fontSize:40,textAlign:'center',fontStyle:'italic'}}>Cactus</Text> 
          <Text style={{fontSize:40,fontStyle:'italic',textAlign:'center'}}>Restaurante</Text> 
          
          
          </TouchableOpacity> 
          </Animated.View>
         
          </View>
    
  );
}

