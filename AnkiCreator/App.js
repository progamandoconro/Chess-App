/**
 React Native App to study Kanji. Uses Anki method and Kanjis can be added by the user. 
 TODO: Anki Logic and save object into memory.
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleRepeat = () => {
    console.log('Repeat');
  };
  const handleGood = () => {
    console.log('Good');
  };
  const handleHard = () => {
    console.log('Hard');
  };
  const handleEasy = () => {
    console.log('Easy');
  };
  const handleAdd = () => {
    console.log('Add');
    setModalVisible(true);
  };

  const handleAddKanji = () => {
    console.log('Add Kanji');
  };

  const ModalScreen = () => {
    return (
      <Modal
        style={styles.modalScreen}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.input}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Kanji 漢字</Text>
            <TextInput style={styles.inputInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>平仮名 Hiragana</Text>
            <TextInput style={styles.inputInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>意味 Meaning</Text>
            <TextInput style={styles.inputInput} />
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
        <TouchableOpacity style={styles.add} onPress={handleAdd}>
          <Text style={styles.customBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.anki}>
        <Text style={styles.kanji}>漢字</Text>
        <Text style={styles.hiragana}>ひらがな</Text>
        <Text style={styles.meaning}>Meaning</Text>
      </View>
      <ModalScreen />
      <View style={styles.buttons}>
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

