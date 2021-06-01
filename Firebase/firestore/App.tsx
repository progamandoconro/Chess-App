/**
yarn add @react-native-firebase/app
yarn add @react-native-firebase/firebase

 */

import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {reference} from '.Storage';

interface App {
  [key: string]: {kanji: string};
}
const App = () => {
  const [data, setData] = useState<App | undefined>({
    '0': {kanji: 'No data'},
  });
  useEffect(() => {
    reference
      .get()
      .then(doc => {
        if (doc.exists) {
          // typeof doc.data === object
          setData(doc.data());
          console.log(doc.data());
        } else {
          // typeof doc.data() === undefined
          console.log('No document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);
  return <Text> {data && data['0'].kanji}</Text>;
};
export default App;
