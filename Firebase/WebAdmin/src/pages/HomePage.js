import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonInput,

} from "@ionic/react";
import TabContainer from "../components/TabContainer";
import firebase from '@firebase/app'

const writeUserData =(userInfo)=> {
  firebase.database().ref('reservas').push({
      userInfo
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
}

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      onListPage: true,
      username:[],
      reservas:[],
      value: '',

    };
  }

  componentWillUpdate () {

      const readUsersData = ()=> {
      const nameRef =  firebase.database().ref('reservas')
      nameRef.on('value', (snapshot)=> {
        const state = snapshot.val()
        this.state.reservas =  state
    })

    }
    readUsersData()
    }

  _changedTabs = e => {
    if (e.currentTarget.attributes.tab.value === "tab1") {
      this.setState(() => ({ onListPage: true }));
    } else {
      this.setState(() => ({ onListPage: false }));
    }
  }

  render() {

  const myData = this.state.reservas
  const pushData = (username)  => {
    this.setState({username })
    }

    const user = this.state.username

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

        <IonContent> <li> {JSON.stringify({myData})} </li></IonContent>
        <h1>Introduzca la reserva a confirmar:</h1>
        <IonContent>

          <input 
            onChange={e=>this.setState({value: e.target.value})}
            value={this.state.value}
            onBlur={()=>pushData(this.state.value)}
           > 
          </input>  

        <IonButton

         onClick={writeUserData( JSON.stringify(user) )}

         > Escribir </IonButton> 
          <IonButton
         onClick={
          send => pushData(send)     
         }
         > Enviar </IonButton> 

         <IonInput/>
         </IonContent>
      </IonPage>
    );
  }
}

export default HomePage
