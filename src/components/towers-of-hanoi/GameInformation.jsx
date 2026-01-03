import React from "react";
import PopUp from "../common/PopUp";

export const GameInformation = ({ showInfo = false, onClose=()=>{} }) => {
  if (!showInfo) return;
  return (
    <PopUp>
      <div className="w-full">
        <div className="relative flex justify-center items-center w-full">
          <h2 className="text-center text-2xl font-bold">Game Information</h2>
          <button className="absolute top-1 right-1 cursor-pointer" onClick={onClose}>X</button>
        </div>

        <h2 className="text-xl font-bold">Objective</h2>
        <p>
          {"->"}Move all disks from Rod A to Rod B or C, following the rules
          below.
        </p>
        <h2 className="text-xl font-bold">Rules</h2>
        <ul>
          <p>{"->"} Only one disk can be moved at a time.</p>
          <p>{"->"}Only the top disk of any rod can be moved.</p>
          <p>{"->"}A larger disk cannot be placed on top of a smaller disk.</p>
        </ul>
      </div>
    </PopUp>
  );
};
