import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCount(text) {
    const textArr = text.split(' ');
    return textArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000)
    }
  }, [time])

  return (
    <>
      <h1>Speed Typing Exercise</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining: {time}</h4>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>Word count:</h1>
    </>
  )
}

export default App; 