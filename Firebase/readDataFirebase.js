import React, { Component} from "react";
import firebase from 'firebase'
import './App.css';


var firebaseConfig = {
  
  apiKey: "AIzaSyBzkakvvykR5oqjVj1EvtOY2WUN877v38s",
  authDomain: "webtest-a81dc.firebaseapp.com",
  databaseURL: "https://webtest-a81dc.firebaseio.com",
  projectId: "webtest-a81dc",
  storageBucket: "webtest-a81dc.appspot.com",
  messagingSenderId: "180737000927",
  appId: "1:180737000927:web:3d1df2cd0b631a2601b06a",
  measurementId: "G-9CB63L546Y"
  
  
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const writeAdminData =(userInfo)=> {
  firebase.database().ref('user0001').push({
    userInfo
  }).catch((error)=>{
    console.log('error ' , error)
  })
}

class HomePage extends Component {
  
  constructor() {
    super();
    this.state = {
      onListPage: true,
      data:[],
      reservas:[],
      value:  [],
      
    };
  }
  
  componentDidMount () {
    
    firebase.database().ref('user0001')
    .on('value', (snapshot)=> {
      this.setState({reservas:{snapshot}})
    })
  }
  
  componentWillUpdate(){
    console.log('listening ... ')
    
  }
  
  render() {
    
    const pushAdminData = (data)  => {
      this.setState({data})
    }
    
    const reservas =  JSON.stringify(this.state.reservas)
    const tabla =  reservas.split (',').map ((item, i) => 
    <p key={i}>{item.substr(35).replace("}","").replace("}}","")}</p>)
    
    return (
      
      <div className='myApp' >
      <div className='myHeader'>
      
      <h1 style={myStyle}>Introduzca la reserva a confirmar:</h1>
      <div style={myStyle}  
      >
      <input 
      onChange={ e=> this.setState({value: e.target.value})}
      value={this.state.value} 
      
      > 
      </input>  
      <hr style={{color:'white'}}></hr>
      </div>
      
      <div style={myStyle}  
      >
      <button
      onClick= {()=>{
        pushAdminData(this.state.value) ;
        writeAdminData( this.state.value) ;
        
      }}
      
      > Enviar </button>
      
      </div>
      
      <div className='mySeparator'>
      <h1> Reservaciones: </h1>
      
      
      <div className='myList'>
      
      <ul> { 
        
        tabla.reverse()
        
      }
      
      
      
      </ul> 
      </div>           
      </div>  
      </div>
      </div>
      
      )
      
      
    }
    
  }
  
  const myStyle = {
    
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  }
  
  export default HomePage;
  
  
