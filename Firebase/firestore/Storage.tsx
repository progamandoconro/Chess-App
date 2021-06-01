import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const storage = firebase
  .firestore()
  .collection('anki')
  .doc('cnGu1MKoKJFZP06JRMi2');

export {storage}
