import React, { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 15

  const [userInput, setUserInput] = useState('');
  const [time, setTime] = useState(STARTING_TIME);
  const [countDown, setCountDown] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setUserInput(value);
  }

  function finalWordCount(userInput) {
    const textArr = userInput.split(' ');
    return textArr.filter(word => word !== "").length
  }

  function startGame() {
    setCountDown(true);
    setTime(STARTING_TIME);
    setUserInput('');
    textareaRef.current.disabled = false;
    textareaRef.current.focus()
  }

  function endGame() {
    setCountDown(false);
    setWordCount(finalWordCount(userInput));
  }



  useEffect(() => {
    if (countDown && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000)
    } else if (time === 0) {
      endGame();
    }
  }, [time, countDown])

  return (
    <>
      <h1>Speed Typing Exercise</h1>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        value={userInput}
        disabled={!countDown}
      />
      <h4>Time Remaining: {time}</h4>
      <button
        onClick={startGame}
        disabled={countDown}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </>
  )
}

export default App; 