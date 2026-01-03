import React from "react";
import PopUp from "../common/PopUp";

export default function ChooseDifficulty({ setNumberOfSlides, setMoves }) {
  return (
    <PopUp>
      <h3 className="text-2xl font-semibold  mb-3">Difficulty</h3>
      <p className=" font-semibold">Choose number of Slides</p>
      {[...Array(6)].map((value, index) => (
        <button
          key={index}
          className="text-black w-1/2 mt-1 bg-blue-200 rounded-md hover:scale-105 transition-all ease-linear"
          onClick={() => {
            setNumberOfSlides(index + 3);
            setMoves();
          }}
        >
          {index + 3}
        </button>
      ))}
    </PopUp>
  );
}
