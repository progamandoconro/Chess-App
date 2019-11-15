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

const writeAdminData =(userInfo)=> {
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
      data:[],
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
  const pushData = (data)  => {
    this.setState({data })
    }
    const tabla = JSON.stringify(this.state.reservas)

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

        <IonContent>
         
         <table> {tabla.split()}  </table>
         </IonContent>
        <h1>Introduzca la reserva a confirmar:</h1>
        <IonContent>

          <input 
            onChange={ e=> this.setState({value: e.target.value})}
            value={this.state.value}
                  
           > 
          </input>  
          <IonButton
          onClick= {()=>{
            pushData(this.state.value) ;
            writeAdminData( JSON.stringify(this.state.value) ) ;
            
          }}
        
         > Enviar </IonButton> 

         <IonInput/>
         </IonContent>
      </IonPage>
    );
  }
}

export default HomePage
