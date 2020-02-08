import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import data from "../data/data";

export default function HomeScreen() {
  const randomNumberGenerator = n => {
    return Number(Math.floor(Math.random() * n));
  };

  const [randomNum, setRandomNum] = useState(randomNumberGenerator(850));
  const showKanji = () => {
    const KanjiNt = data[0].Kanji.DATA[randomNum];
    console.log(KanjiNt.kanji);

    return (
      <View>
        <Text style={styles.kanji} key={data.Kanji}>
          {KanjiNt.kanji}
        </Text>
        <Text key={data.Kanji}>
          {KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning}
        </Text>
      </View>
    );
  };

  const handleButton = () => {
    setRandomNum(randomNumberGenerator(850));
  };

  return (
    <View style={styles.container}>
      {showKanji()}
      <Text> </Text>
      <Button title="Random" onPress={e => handleButton(e)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff"
  },
  kanji: {
    fontSize: 200
  }
});
