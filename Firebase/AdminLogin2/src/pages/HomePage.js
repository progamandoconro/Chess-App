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
  constructor(props) {
    super(props);
    this.state = {
      onListPage: true
    };
  }


  /**
   * determine if i need to show the add item modal
   */
  _addItem = _value => {
    debugger;
    this.setState(() => ({ showAddItemModal: _value }));
  };

  /**
   * determine if the tabs have changed so I can change the buttons 
   * in the title bar
   */
  _changedTabs = e => {
    if (e.currentTarget.attributes.tab.value === "tab1") {
      this.setState(() => ({ onListPage: true }));
    } else {
      this.setState(() => ({ onListPage: false }));
    }
  }
  

  componentDidMount () {
    const nameRef = firebase.database().ref().child('usuario')

    nameRef.on('value', (snapshot)=> {
      this.setState({
        reserva: snapshot.val()
      })

    })
  }

  render() {
    let { onListPage } = this.state;
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
        <IonContent><h1> {writeUserData('hola2')} </h1> </IonContent>
        <IonInput type='email' name='data'/>  

      </IonPage>
    );
  }
}

export default HomePage
