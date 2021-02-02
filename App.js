import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function wordCount(text) {
    const textArr = text.split(' ');
    return textArr.filter(word => word !== "").length
  }

  return (
    <>
      <h1>Speed Typing Exercise</h1>
      <textarea
        onChange={handleChange}
        value={text}
      />
      <h4>Timer</h4>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>Word count:</h1>
    </>
  )
}

export default App; 