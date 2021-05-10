import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAllKeys() {
  const allKeys = await AsyncStorage.getAllKeys();
  console.log(allKeys);
}

async function saveValue(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function readValue(key: string) {
  const value = await AsyncStorage.getItem(key);
  return value;
}

//async function removeValue(key:string) {
//  await AsyncStorage.removeItem(key);
//}
//
