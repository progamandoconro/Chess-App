import React, { useState, useEffect} from 'react';
import firebase from 'firebase';

import './App.css';

var firebaseConfig = {
  apiKey: 'AIzaSyBzkakvvykR5oqjVj1EvtOY2WUN877v38s',
  authDomain: 'webtest-a81dc.firebaseapp.com',
  databaseURL: 'https://webtest-a81dc.firebaseio.com',
  projectId: 'webtest-a81dc',
  storageBucket: 'webtest-a81dc.appspot.com',
  messagingSenderId: '180737000927',
  appId: '1:180737000927:web:3d1df2cd0b631a2601b06a',
  measurementId: 'G-9CB63L546Y'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function App() {
  const [reservas, handleReservas] = useState([]);
  const [input, handleInput] = useState('');
  
  
  useEffect(()=>{
    firebase
    .database()
    .ref('user0001')
    .on('value', (e)=> (e)
    )
    console.log('Mounted ');
  }
  
  )
  
  useEffect(()=>{
    
    firebase
    .database()
    .ref('user0001')
    .on('value', handleReservas
    );
  },[])
  
  const tabla = JSON.stringify(reservas)
  
  const mytabla =  tabla.split (',').map ((item, i) => <div>
  <p key={i}>{item
    .replace(RegExp(/([.*+?^=!$(){}|[\]\/\\""])/g)," ")
    .replace("userInfo","").replace(":","->").replace(":"," ")
  }</p><item> {item}</item>
  
  
  <button onClick={()=>writeAdminData(item)}> Confirmar </button></div>);
  
  const writeAdminData =(userInfo)=> {
    firebase.database().ref('user0001').push({
      userInfo
    }).catch((error)=>{
      console.log('error ' , error)
    })
  }
  
  return (
    
    
    <div style={myStyle}>
    <h1 style={myStyle}>Introduzca la reserva a confirmar:</h1>
    
    <h1> Confirmar manualmente </h1>
    
    <input 
    value={input}
    onChange={e=>handleInput(e.target.value)}
    >
    
    
    </input>
    
    <button onClick={()=>writeAdminData(input)}> Confirmar </button>
    
    <br></br>
    <br></br>
    
    
    
    <ul className='myList' > { 
      
      mytabla.reverse()
      
    }
    
    </ul>  
    
    
    </div>
    )
  }
  
  const myStyle = {
    
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  }
  
  export default App;
  
