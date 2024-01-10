import React from "react";
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link to={"/Quiz"}><button className="play">Play</button>
      </Link>
    </div>
  );
}