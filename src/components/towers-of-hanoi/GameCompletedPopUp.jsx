import React from "react";
import PopUp from "../common/PopUp";

export default function GameCompletedPopUp({
  moves,
  OnRestart,
  chooseDifficultyClick,
}) {
  return (
    <PopUp>
      <p className="text-2xl font-bold mb-3">Game completed</p>
      <p>You completed the game in {moves} moves</p>
      <div className="w-full flex space-x-10 items-center justify-center mt-10">
        <button
          className="bg-red-600 text-white rounded-md px-5 p-1"
          onClick={OnRestart}
        >
          Restart
        </button>
        <button
          className="bg-blue-600 text-white rounded-md px-5 p-1"
          onClick={chooseDifficultyClick}
        >
          Choose difficulty
        </button>
      </div>
    </PopUp>
  );
}
