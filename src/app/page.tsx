import React from "react";
import TicTacToeBoard from "./tic-tac-toe-board";

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center relative">
      <TicTacToeBoard />
    </main>
  );
};

export default HomePage;
