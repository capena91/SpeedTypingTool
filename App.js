import React, { useState, useEffect } from "react";

function App() {
  const STARTING_TIME = 15

  const [text, setText] = useState('');
  const [time, setTime] = useState(STARTING_TIME);
  const [timer, setTimer] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function finalWordCount(text) {
    const textArr = text.split(' ');
    return textArr.filter(word => word !== "").length
  }

  function startGame() {
    setTimer(true);
    setTime(STARTING_TIME);
    setText('');
  }

  function endGame() {
    setTimer(false);
    setWordCount(finalWordCount(text));
  }



  useEffect(() => {
    if (timer && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000)
    } else if (time === 0) {
      endGame();
    }
  }, [time, timer])

  return (
    <>
      <h1>Speed Typing Exercise</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!timer}
      />
      <h4>Time Remaining: {time}</h4>
      <button
        onClick={startGame}
        disabled={timer}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </>
  )
}

export default App; 