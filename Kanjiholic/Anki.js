import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import kanji from './storage/kanjiapi_full.json';

const Anki = () => {
  const [randomNum, setRandomNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    console.log('init');
  });
  const kanjiList = new Object();

  const debugKanjis = () => {
    let index = 0;
    for (var i in kanji.kanjis) {
      if (
        i &&
        kanji.kanjis[i].meanings.length > 0 &&
        kanji.kanjis[i].kun_readings.length > 0
      ) {
        kanjiList[index] = {
          kanjis: String(i),
          kun_readings: String(kanji.kanjis[i].kun_readings),
          meanings: String(kanji.kanjis[i].meanings),
        };
        index = ++index;
      }
    }
    kanjiList.len = index;
  };

  debugKanjis();

  const randomGen = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.len) + 1;
    setRandomNum(randomIndex);
    setShowAnswer(false);
    console.log(kanjiList.len, randomNum, randomIndex);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const KanjiSection = () => {
    const AnswerSection = () => {
      if (showAnswer === true) {
        return (
          <View>
            <View style={styles.answerSection}>
              <Text style={styles.answer}>
                {kanjiList[randomNum].kun_readings}
              </Text>
              <Text style={styles.answer}>{kanjiList[randomNum].meanings}</Text>
            </View>
            <View style={styles.buttonSection}>
              <Button title="GOOD" onPress={randomGen} />
              <Text> </Text>
              <Button title="HARD" />
              <Text> </Text>
              <Button title="AGAIN" />
            </View>
          </View>
        );
      } else {
        return (
          <View>
            <Button title="Show Answer" onPress={handleShowAnswer} />
          </View>
        );
      }
    };
    return (
      <View style={styles.ankiSection}>
        <Text style={styles.kanjiSection}>{kanjiList[randomNum].kanjis}</Text>
        <AnswerSection />
      </View>
    );
  };
  return (
    <View style={styles.app}>
      <KanjiSection />
      <Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: '100%',
  },
  answerSection: {
    alignItems: 'center',
  },

  answer: {
    fontSize: 50,
  },

  ankiSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },

  buttonSection: {
    bottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  kanjiSection: {
    fontSize: 200,
  },
});

export default Anki;
