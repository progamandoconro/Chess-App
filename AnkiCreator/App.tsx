/**
 React Native App to study Kanji. Uses Anki method and Kanjis can be added by the user. 
 TODO: Anki Logic.
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  interface Anki {
    id: string;
    kanji: string;
    reading: string;
    meaning: string;
    anki: string;
  }
  interface Random {
    value: string;
    lenght: string;
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [random, setRandom] = useState<Random>();
  const [ankiButtons, setAnkiButtons] = useState(false);
  const [fullData, setFullData] = useState<Anki>({
    id: '',
    kanji: '',
    reading: '',
    meaning: '',
    anki: '',
  });

  async function getRandomKey() {
    const allKeys = await AsyncStorage.getAllKeys();
    const r = Math.floor(Math.random() * allKeys.length);
    setRandom({value: allKeys[r], lenght: String(allKeys.length)});
  }
  const updateKanji = () => {
    setAnkiButtons(false);
    getRandomKey();
  };
  const getAllData = async () => {
    //await AsyncStorage.clear()
    const allKeys = await AsyncStorage.getAllKeys();

    !allKeys.length && setModalVisible(!modalVisible);

    const result: any = {};
    try {
      const storage = await AsyncStorage.multiGet(allKeys);
      storage.map(e => {
        result[e[0]] = e[1];
      });
    } catch (e) {
      console.log(e);
    }

    for (let i in result) {
      result[i] = JSON.parse(result[i]);
    }
    setFullData(result);
  };
  useEffect(() => {
    getAllData();
    getRandomKey();
  }, []);
  async function saveValue(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
    getAllData();
  }

  const ShowData = () => {
    try {
      return (
        <View style={styles.anki}>
          <Text style={styles.kanji}>{fullData[random?.value].kanji}</Text>
          <Text style={styles.hiragana}>
            {ankiButtons && fullData[random?.value].reading}
          </Text>

          <Text style={styles.meaning}>
            {ankiButtons && fullData[random?.value].meaning}
          </Text>
        </View>
      );
    } catch (e) {
      return <Text>Add a word to start</Text>;
    }
  };

  const handleRepeat = () => {
    console.log('Repeat');
    updateKanji();
  };
  const handleGood = () => {
    console.log('Good');
    updateKanji();
  };
  const handleHard = () => {
    console.log('Hard');
    updateKanji();
  };
  const handleEasy = () => {
    console.log('Easy');
    updateKanji();
  };
  const handleAddButton = () => {
    console.log('Add');
    setModalVisible(true);
  };
  const AnkiButtons = () => {
    if (!ankiButtons) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.hard}
            onPress={() => {
              setAnkiButtons(true);
            }}>
            <Text> Show Answer </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <>
          <View style={styles.container}>
            <TouchableOpacity style={styles.repeat} onPress={handleRepeat}>
              <Text style={styles.customBtnText}>Repeat</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.hard} onPress={handleHard}>
              <Text style={styles.customBtnText}>Hard</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.good} onPress={handleGood}>
              <Text style={styles.customBtnText}>Good</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.easy} onPress={handleEasy}>
              <Text style={styles.customBtnText}>Easy</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  };

  const ModalScreen = () => {
    const [kanji, setKanji] = useState<Anki>({
      id: '',
      kanji: '',
      reading: '',
      meaning: '',
      anki: '',
    });

    const handleAddKanji = () => {
      console.log('Add Kanji');
      random &&
        saveValue(String(Number(random.lenght) + 1), JSON.stringify(kanji));

      setModalVisible(false);
    };

    return (
      <Modal
        style={styles.modalScreen}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.input}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Kanji 漢字</Text>
            <TextInput
              value={kanji.kanji}
              onChangeText={e => {
                setKanji({...kanji, kanji: e});
              }}
              style={styles.inputInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>平仮名 Hiragana</Text>
            <TextInput
              style={styles.inputInput}
              value={kanji.reading}
              onChangeText={e => {
                setKanji({...kanji, reading: e});
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>意味 Meaning</Text>
            <TextInput
              style={styles.inputInput}
              value={kanji.meaning}
              onChangeText={e => {
                setKanji({...kanji, meaning: e});
              }}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TextInput />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.modalAddKanji}
              onPress={handleAddKanji}>
              <Text style={styles.customBtnText}>Add </Text>
            </TouchableOpacity>
          </View>
          <Text></Text>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.customBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.app}>
      <View style={styles.addContainer}>
        <TouchableOpacity style={styles.add} onPress={handleAddButton}>
          <Text style={styles.customBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <ShowData />
      <ModalScreen />
      <View style={styles.buttons}>
        <AnkiButtons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
  anki: {
    flex: 10,
    alignItems: 'center',
  },
  kanji: {
    fontSize: 120,
  },
  hiragana: {
    fontSize: 50,
  },
  meaning: {
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between',
    marginLeft: 6,
    marginRight: 6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Here style the text of your button */
  customBtnText: {
    fontSize: 20,
    color: '#fff',
  },

  repeat: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
  good: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30,
  },
  hard: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30,
  },
  easy: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30,
  },
  add: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  addContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    right: 0,
    marginRight: 6,
    marginTop: 6,
  },
  modalScreen: {
    height: '100%',
  },
  modalClose: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
  modalAddKanji: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  },
  input: {
    paddingVertical: 10,
    flex: 4,
    justifyContent: 'center',
  },
  inputTitle: {
    fontSize: 30,
    height: 40,
  },
  inputContainer: {
    height: '25%',
    paddingVertical: 40,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputInput: {
    height: 50,
    width: '75%',
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 20,
  },
});

export default App;
