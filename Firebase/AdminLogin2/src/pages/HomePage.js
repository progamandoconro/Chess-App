import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,

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
  componentDidMount () {
    const nameRef = firebase.database().ref('reservas')
    nameRef.once('value', (snapshot)=> {
      this.setState({reservas: snapshot.val()})
      
    })          
  }
  
  constructor(props) {
    super(props);
    this.state = {
      onListPage: true,
      username:[]
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

    let myData = this.state.reservas

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
       
          <input onChange={username => this.setState({ username })} > 
          </input>  

        <IonButton
         title="Enviar"
         onClick={writeUserData(JSON.stringify( this.state.username))}
         > Enviar </IonButton> 
        </IonContent>
      </IonPage>
    );
  }
}

export default HomePage
