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
  const [randomNum, setRandomNum] = useState(randomNumberGenerator(850));

  const KanjiNt = data[0].Kanji.DATA[randomNum];
  const wrongData1 = data[0].Kanji.DATA[randomNumberGenerator()];
  const wrongData2 = data[0].Kanji.DATA[randomNumberGenerator()];
  const wrongData3 = data[0].Kanji.DATA[randomNumberGenerator()];

  const [question, setQuestion] = useState(KanjiNt.kanji);

  const ans = [
    KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning,
  ];

  const [answer, setAnswer] = useState(ans);
  const [color, setColor] = useState(randomColor());
  const [index, setIndex] = useState([0, 1, 2, 3, 4]);
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

      const temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleNext = () => {
    setRandomNum(randomNumberGenerator(850));
    const KanjiNt = data[0].Kanji.DATA[randomNum];

    const ans = [
      KanjiNt.kunyomi + " / " + KanjiNt.onyomi + " / " + KanjiNt.meaning,
    ];
    setQuestion(KanjiNt.kanji);
    setAnswer(ans);
    setColor(randomColor());

    shuffle(index);

    setIndex(index);
    console.log(ans);
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
            <CardContent style={{ backgroundColor: color }}>
              <Typography>
                {" "}
                <input type="checkbox" id="checkbox1" value="false" />
                {allAnswers[index[0]]}
              </Typography>
              <Typography>
                <input type="checkbox" id="checkbox1" value="false" />
                {allAnswers[index[1]]}
              </Typography>
              <Typography>
                <input type="checkbox" id="checkbox1" value="false" />
                {allAnswers[index[2]]}
              </Typography>
              <Typography>
                <input type="checkbox" id="checkbox1" value="false" />
                {allAnswers[index[3]]}
              </Typography>
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
