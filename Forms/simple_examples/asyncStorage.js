import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity} from 'react-native';

export default class App extends React.Component{

  render() {  
    return (

      <View style={styles.container}>

        <TouchableOpacity onPress={this.saveData}>
        <Text style= {{backgroundColor:'grey'}}>Click me to save the data</Text>
        </TouchableOpacity>

        <Text> </Text>

        <TouchableOpacity onPress={this.displayData}>
        <Text style= {{backgroundColor:'grey'}}> Click me to load the data </Text>
        </TouchableOpacity>

       </View>
  )
}

saveData () {

  let obj = {

      name:'Ro',
      email: 'my@email.com',
      
  }
  AsyncStorage.setItem('user',JSON.stringify(obj))
}

displayData = async () => {

    try {
      let user = await AsyncStorage.getItem('user')
      let parsed = JSON.parse(user)
      alert(parsed.name)
    
    }

    catch(error) {
      alert(error)
    }

}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
