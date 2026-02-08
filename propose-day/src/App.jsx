import React, { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16; // Increases size by 20px each time

  // Phrases that appear on the "No" button if she tries to click it
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  // Function to move the No button randomly
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // The "Yes" Screen
  if (yesPressed) {
    return (
      <div className="container">
        <img
          src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          alt="bears kissing"
          className="gif"
        />
        <h1 className="yes-text">Yay!!! I love you! 💋❤️</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <img
        className="gif"
        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
        alt="bear with roses"
      />
      <h1 className="question">Will you be my Valentine?🥺 </h1>
      
      <div className="btn-group">
        <button
          className="yes-btn"
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
        >
          Yes
        </button>

        <button
          className="no-btn"
          onClick={handleNoClick}
        >
          {/* Cycles through the phrases based on how many times she clicked No */}
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </button>
      </div>
    </div>
  );
}

export default App;