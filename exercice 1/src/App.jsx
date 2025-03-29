import React from "react";

export default function App() {
  const [value, setValue] = React.useState(4)

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `50%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    if (value > 2){
      scoreColor = `#a9d453`;
    }

    // 3 - Return the style object
    return {
      width: `${value * 10}%`,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={value} onChange={(e) => setValue(e.target.value)}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
