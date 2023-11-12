import React from "react";
import ReactDOM from "react-dom";
import './Context.css';

function Context() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/4AiXzf8.png" width="40" alt="Context" />
      </nav>
      <h1>Reasons i'm excited to learn React</h1>
      <ol>
        <li>Popular library </li>
        <li>I'm more likely to get a job as a developer</li>
      </ol>
      <footer>
        <small>
          2023 Artiom development. All rights reserved
        </small>
      </footer>
    </header>
  );
}

console.log(Context.prototype);

export default Context;