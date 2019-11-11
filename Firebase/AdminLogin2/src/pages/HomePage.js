import React, { Component } from "react";
import firebase from '@firebase/app'
import '@firebase/auth'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,

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
    const nameRef = firebase.database()
    .ref('reservas')
    
    nameRef.on('value', (snapshot)=> {
      let datos = []
      snapshot.forEach(child=>{
        datos.push(child.val())
      })


      this.setState({reservas: datos })

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
       
        <IonContent> <li> {myData} </li>
        
         </IonContent>
        
        <IonContent>
        <div>  
        
        <h1>Introduzca la reserva a confirmar:</h1>
        <input       
        > 
        
        </input> 
        
        </div> 

        </IonContent>

        <IonContent><h1> {/*writeUserData('hola5')*/} </h1> </IonContent>
             

      </IonPage>
    );
  }
}

export default HomePage
