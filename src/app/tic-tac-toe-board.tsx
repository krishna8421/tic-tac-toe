"use client";

import React, { useState, useMemo } from "react";
import { toast } from "sonner";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";

type SquareValue = "X" | "O" | null;

interface BoardProps {
  squares: SquareValue[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => (
  <div className="grid grid-rows-3 grid-cols-3">
    {squares.map((value, index) => (
      <button
        key={index}
        className={`w-20 h-20 font-semibold text-3xl dark:text-gray-100 text-gray-900 border-indigo-500 ${
          index % 3 !== 0 ? "border-l-4" : ""
        } 
          ${Math.floor(index / 3) !== 0 ? "border-t-4" : ""}`}
        onClick={() => onClick(index)}
      >
        {value}
      </button>
    ))}
  </div>
);

interface TicTacToeBoardProps {}

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = () => {
  const initialBoard: SquareValue[] = Array(9).fill(null);

  const [board, setBoard] = useState<SquareValue[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number): void => {
    const currentBoard: SquareValue[] = board.slice();

    if (currentBoard[index] || calculateWinner(currentBoard)) {
      // If the square is already filled or there's a winner, show a custom toast and do nothing
      toast.info(<div>🚫 Invalid move!</div>);
      return;
    }

    currentBoard[index] = xIsNext ? "X" : "O";

    setBoard(currentBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = (): void => {
    setBoard(initialBoard);
    setXIsNext(true);
    toast.success(<div>🎉 Game Reset!</div>);
  };

  const winner: SquareValue | null = useMemo(
    () => calculateWinner(board),
    [board]
  );

  const status: string = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="mt-4">{status}</div>
      <div className="mt-4">
        <button onClick={resetGame} className="flex items-center">
          <ArrowPathRoundedSquareIcon className="w-5 h-5 mr-2" />
          Reset Game
        </button>
      </div>
    </>
  );
};

// Function to determine the winner
const calculateWinner = (squares: SquareValue[]): SquareValue | null => {
  const lines: number[][] = [
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
      toast.success(<div>🏆 Player {squares[a]} wins!</div>);
      console.log("Winner: ", squares[a]);
      return squares[a];
    }
  }

  return null;
};

export default TicTacToeBoard;
