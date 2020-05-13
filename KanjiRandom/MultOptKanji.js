import React, { useState } from "react";
import randomColor from "randomcolor";
import {
  Button,
  Paper,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import data from "../storage/data.json";
import "./Screens.css";

const randomNumberGenerator = (n = 850) => {
  return Number(Math.floor(Math.random() * n));
};

export default function TestingScreen() {
  const [randomNum, setRandomNum] = useState(randomNumberGenerator());

  const KanjiNt = data[0].Kanji.DATA[randomNum];
  const wrongData1 = data[0].Kanji.DATA[randomNumberGenerator()];
  const wrongData2 = data[0].Kanji.DATA[randomNumberGenerator()];
  const wrongData3 = data[0].Kanji.DATA[randomNumberGenerator()];

  const question = [KanjiNt.kanji];

  const answer = [
    KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning,
  ];

  const [color, setColor] = useState(randomColor());
  const [index, setIndex] = useState([0, 1, 2, 3, 4]);
  const [check, setCheck] = useState(false);
  const allAnswers = [
    answer,
    wrongData1.kunyomi + " / " + wrongData1.onyomi + " / " + wrongData1.meaning,
    wrongData2.kunyomi + " / " + wrongData2.onyomi + " / " + wrongData2.meaning,
    wrongData3.kunyomi + " / " + wrongData3.onyomi + " / " + wrongData3.meaning,
  ];

  const shuffle = (array) => {
    let currentIndex = array.length - 1;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporarychecked = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporarychecked;
    }

    return array;
  };

  const handleNext = () => {
    setRandomNum(randomNumberGenerator());
    setColor(randomColor());
    shuffle(index);
    setIndex(index);
    setCheck(false);
  };

  const handleCheck = (obs, real) => {
    if (obs !== real) {
      alert(real);
    } else {
      handleNext();
    }
  };

  const showMultipleOptions = (val) => {
    return (
      <Typography>
        {" "}
        <input
          type="checkbox"
          id="checkbox1"
          checked={check}
          onChange={() => handleCheck(allAnswers[index[val]], answer)}
        />
        {allAnswers[index[val]]}
      </Typography>
    );
  };

  const showKanji = () => {
    return (
      <Container className="Container">
        <Container>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            onClick={(e) => handleNext(e)}
          >
            {" "}
            Next{" "}
          </Button>
          <br />
          <br />
        </Container>
        <Container>
          <Paper>
            <Card>
              <CardContent style={{ backgroundColor: color }}>
                <Typography
                  style={{ fontSize: "6rem" }}
                  className="Kanji"
                  key={data.Kanji}
                >
                  {question}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Container>
      </Container>
    );
  };

  const optionsGrid = () => {
    return (
      <Container>
        <Paper>
          <Card>
            <CardContent
              style={{ backgroundColor: "grey", textAlign: "initial" }}
            >
              {showMultipleOptions(0)}
              {showMultipleOptions(1)}
              {showMultipleOptions(2)}
              {showMultipleOptions(3)}
            </CardContent>
          </Card>
        </Paper>
      </Container>
    );
  };

  return (
    <Container className="Main">
      {showKanji()}
      <br />

      {optionsGrid()}
      <br />
    </Container>
  );
}
