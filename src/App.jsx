import RockPaperScissor from "./components/RockPaperScissor";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [displayMsg, setDisplayMsg] = useState("The game has started!");
  const [bgColor, setBgColor] = useState("black");
  const [message, setMessage] = useState(false);

  const onClickHandler = (event) => {
    const userSelection = event.target.name;
    const compSelection = genCompChoice();
    setMessage(false);

    setUserChoice(userSelection);
    setCompChoice(compSelection);

    playGame(userSelection, compSelection);
  };

  const genCompChoice = () => {
    const choices = ["Rock", "Paper", "Scissor"];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
  };

  const userWin = () => {
    setWinner("User");
    setUserScore((prev) => prev + 1);
    setDisplayMsg("You won!");
    setBgColor("green");
  };

  const compWin = () => {
    setWinner("Computer");
    setCompScore((prev) => prev + 1);
    setDisplayMsg("You lost!");
    setBgColor("red");
  };

  const gameDraw = () => {
    setWinner("Draw");
    setDisplayMsg("The game was drawn!");
    setBgColor("#5e5b52");
  };

  const playGame = (user, comp) => {
    if (user === comp) {
      gameDraw();
    } else {
      if (user === "Rock") {
        comp === "Paper" ? compWin() : userWin();
      } else if (user === "Paper") {
        comp === "Rock" ? userWin() : compWin();
      } else if (user === "Scissor") {
        comp === "Rock" ? compWin() : userWin();
      }
    }
  };

  const resetBtnHandler = () => {
    setUserChoice("");
    setCompChoice("");
    setUserScore(0);
    setCompScore(0);
    setDisplayMsg("Game has started!");
    setBgColor("black");
    setMessage(true);
  };

  return (
    <>
      <RockPaperScissor
        userChoice={userChoice}
        compChoice={compChoice}
        userScore={userScore}
        compScore={compScore}
        winner={winner}
        displayMsg={displayMsg}
        bgColor={bgColor}
        onClickHandler={onClickHandler}
        resetBtnHandler={resetBtnHandler}
        message={message}
      ></RockPaperScissor>
    </>
  );
};

export default App;
