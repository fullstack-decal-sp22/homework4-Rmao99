import React, { useState } from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    let status = 'Next player: X';
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setNext] = useState('X');

    function renderSquare(i) {
        return (
          <Square 
            val = {state[i]}
            onClick={() => handleClick(i)}
          />
        );
    }

    function handleClick(i) {
      const squares = state.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = xIsNext ? 'X' : 'O';
      setNext(!xIsNext);
      setState(squares);
    }

    const winner = calculateWinner(state);
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;