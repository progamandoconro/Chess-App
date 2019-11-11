import React, { Component } from "react";
import firebase from 'firebase'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonButton,
  IonInput
} from "@ionic/react";

import TabContainer from "../components/TabContainer";

const writeUserData =(userInfo)=> {
  firebase.database().ref('reservas/datos/').push({
      userInfo
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
}

class HomePage extends Component {
  componentDidMount () {
    const nameRef = firebase.database().ref().child('usuario')

    nameRef.on('value', (snapshot)=> {
      this.setState({
        reserva: snapshot.val()
      })

    })
  }
  
  constructor(props) {
    super(props);
    this.state = {
      onListPage: true
    };
  }

  _changedTabs = e => {
    if (e.currentTarget.attributes.tab.value === "tab1") {
      this.setState(() => ({ onListPage: true }));
    } else {
      this.setState(() => ({ onListPage: false }));
    }
  }
  
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
           
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <TabContainer
            history={this.props.history}
            changedTabs={e => this._changedTabs(e)}
            addItem={this._addItem}
            showAddItemModal={this.state.showAddItemModal}
          />
         
        </IonContent>
       
        <IonContent><h1> Reservas en Firebase: {this.state.reserva}</h1> </IonContent>
        
        <IonContent>
        <div>  
        
        <h1>Introduzca la reserva a confirmar:</h1>
        <input
        
        
        > 
        
        </input> 
        
        </div> 

        </IonContent>

        <IonContent><h1> {/*writeUserData('hola2')*/} </h1> </IonContent>
             

      </IonPage>
    );
  }
}

export default HomePage
