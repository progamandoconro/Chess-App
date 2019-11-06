import './App.css';
import React from 'react'
import firebase from 'firebase'

export const FIREBASE_CONFIG = {
  
  }
  firebase.initializeApp(FIREBASE_CONFIG)

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name:'Carlos'
    }
  }

  componentDidMount () {
    const nameRef = firebase.database().ref().child('object').child('name')

    nameRef.on('value', (snapshot)=> {
      this.setState({
        name: snapshot.val()
      })

    })
  }
render(){
  return <h1>Hola {this.state.name}</h1>
}

}

export default App;
