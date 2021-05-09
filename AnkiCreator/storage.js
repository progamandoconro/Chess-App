//yarn add @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAllKeys() {
  const allKeys = await AsyncStorage.getAllKeys();
  console.log(allKeys);
}
async function saveValue(key, value) {
  await AsyncStorage.setItem(key, value);
}
async function readValue(key) {
  const v = await AsyncStorage.getItem(key);
  console.log(v);
}
async function removeValue(key) {
  await AsyncStorage.removeItem(key);
}

export {getAllKeys, saveValue, readValue, removeValue};
