import React from "react";
import TicTacToeBoard from "./tic-tac-toe-board";

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <TicTacToeBoard />
    </main>
  );
};

export default HomePage;