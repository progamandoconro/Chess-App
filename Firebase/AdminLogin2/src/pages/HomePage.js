
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from 'firebase'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonButton
} from "@ionic/react";

// MOBX
import { inject, observer } from "mobx-react";
import TabContainer from "../components/TabContainer";
// import CatalogHeader from "../components/CatalogHeader";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onListPage: true
    };
  }

  _addItem = _value => {
    debugger;
    this.setState(() => ({ showAddItemModal: _value }));
  };

  _changedTabs = e => {
    if (e.currentTarget.attributes.tab.value === "tab1") {
      this.setState(() => ({ onListPage: true }));
    } else {
      this.setState(() => ({ onListPage: false }));
    }
  };

  componentDidMount () {
    const nameRef = firebase.database().ref().child('reservas').child('datos')

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
            {onListPage ? (
              <IonButtons slot="end">
                <IonButton
                  onClick={e => {
                    this.setState(() => ({ showAddItemModal: true }));
                  }}
                >
                  ADD ITEM
                </IonButton>
              </IonButtons>
            ) : null}
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
        <IonContent><h1> </h1> </IonContent>
        <IonContent><h1> </h1>  </IonContent>

      </IonPage>
    );
  }
}

export default withRouter(inject("store")(observer(HomePage)));
