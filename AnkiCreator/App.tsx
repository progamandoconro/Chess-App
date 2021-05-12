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
  const [kanjiData, setKanjiData] = useState<string | null>('');
  const [result, setResult] = useState<Anki>();
  const [random, setRandom] = useState<Random>();
  const [ankiButtons, setAnkiButtons] = useState(false);

  async function getRandomKey() {
    const allKeys = await AsyncStorage.getAllKeys();
    console.log(allKeys);
    const r = Math.floor(Math.random() * allKeys.length);

    setRandom({value: allKeys[r], lenght: String(allKeys.length)});
  }
  async function saveValue(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }
  async function readValue(key: string) {
    //await AsyncStorage.clear()
    saveValue(
      '0',
      JSON.stringify({
        id: '0',
        kanji: '猫',
        reading: 'ねこ',
        meaning: 'Gato',
        anki: '0',
      }),
    );
    const value = await AsyncStorage.getItem(key);
    setKanjiData(value);
  }
  const updateKanji = () => {
    setAnkiButtons(false);
    getRandomKey();
    random && readValue(random.value);
  };

  useEffect(() => {
    saveValue(
      '0',
      JSON.stringify({
        id: '0',
        kanji: '猫',
        reading: '猫',
        meaning: 'Gato',
        anki: '0',
      }),
    );
    random && readValue(random.value);
  }, []);

  useEffect(() => {
    let k: string | null;
    if (kanjiData) {
      k = kanjiData;
      const o = JSON.parse(k);
      setResult(o);
    }
    getRandomKey();
  }, [kanjiData]);

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
      id: '0',
      kanji: '猫',
      reading: 'ねこ',
      meaning: 'Gato',
      anki: '100',
    });

    const handleAddKanji = () => {
      console.log('Add Kanji');
      random &&
        saveValue(String(Number(random.lenght) + 1), JSON.stringify(kanji));

      setModalVisible(false);
      readValue('0');
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
      <View style={styles.anki}>
        <Text style={styles.kanji}>{result && result.kanji}</Text>
        <Text style={styles.hiragana}>{result && result.reading}</Text>
        <Text style={styles.meaning}>{result && result.meaning}</Text>
      </View>
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
    fontSize: 80,
  },
  hiragana: {
    fontSize: 30,
  },
  meaning: {
    fontSize: 10,
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
