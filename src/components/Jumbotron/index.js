import React from "react";
import './style.css';

// Navbar Score Board
function Jumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 class="display-3">Mustang Memory</h1>
        <hr class="my-2" />
        <p class="lead">Choose one car only. Any repeats and you lose!</p>
        <p>
          <span>Your Score: {props.score} | Top Score: {props.highScore} | {props.jumbotronPrompt}</span>
        </p>

      </div>
    </div>

  );
}

export default Jumbotron;