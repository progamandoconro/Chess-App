/**
yarn add @react-native-firebase/app
yarn add @react-native-firebase/firebase

 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {reference} from './Storage.tsx';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {

    reference
      .get()
      .then(doc => {
        if (doc.exists) {
          setData(doc.data())
          console.log(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <View>
      <Text>{data && data["0"].kanji}</Text>
    </View>
  );
};


export default App;
