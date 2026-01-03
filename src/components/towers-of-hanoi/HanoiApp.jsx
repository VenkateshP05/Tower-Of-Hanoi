import { useEffect, useState } from "react";
import Block from "./Block";
import GameCompletedPopUp from "./GameCompletedPopUp";
import ChooseDifficulty from "./ChooseDifficulty";
import { GameInformation } from "./GameInformation";

const styles = {
  0: "w-[10%] bg-red-500 rounded-lg text-center",
  1: "w-[20%] bg-blue-500 rounded-lg",
  2: "w-[30%] bg-green-500 rounded-lg",
  3: "w-[40%] bg-yellow-500 rounded-lg",
  4: "w-[50%] bg-purple-500 rounded-lg",
  5: "w-[60%] bg-gray-500 rounded-lg",
  6: "w-[70%] bg-orange-500 rounded-lg",
  7: "w-[80%] bg-violet-500 rounded-lg",
};
const MIN_MOVES = {
  3: 7,
  4: 15,
  5: 31,
  6: 63,
  7: 127,
  8: 255,
};

export default function HanoiApp() {
  const [blocks, setBlocks] = useState([]);
  const [activeSlide, setActiveSlide] = useState();
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [numberOfSlides, setNumberOfSlides] = useState(null);
  const [restart, setRestart] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const handleChooseDifficulty = () => {
    handleRestart();
    setNumberOfSlides(null);
  };

  const handleRestart = () => {
    setRestart((prev) => !prev);
    setBlocks([]);
    setGameCompleted(false);
    setMoves(0);
  };

  useEffect(() => {
    const blocks = [...Array(numberOfSlides)].map((value, index) => {
      return { id: index, block: "A" };
    });
    setBlocks(blocks);
  }, [numberOfSlides, restart]);

  return (
    <div className="w-full max-w-[700px] relative text-white">
      {!numberOfSlides && !showInfo && (
        <ChooseDifficulty
          setNumberOfSlides={setNumberOfSlides}
          setMoves={() => setMoves(0)}
        />
      )}
      <GameInformation
        showInfo={showInfo}
        onClose={() => {
          setShowInfo(false);
        }}
      />
      <h2 className="w-full text-center mb-3 text-2xl font-bold">
        Towers of Hanoi
      </h2>
      <div className="p-2 w-full h-[300px] border border-blue-100 flex flex-row relative rounded-md shadow-sm shadow-blue-200">
        <div className="absolute right-0 bottom-full group">
          <button className="text-3xl rotate-90">...</button>
          <div className="hidden group-focus-within:block">
            <ChooseDifficulty
              setNumberOfSlides={setNumberOfSlides}
              setMoves={() => setMoves(0)}
            />
          </div>
        </div>
        <Block
          blocks={blocks}
          block="A"
          styles={styles}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          setBlocks={setBlocks}
          setMoves={setMoves}
          setGameCompleted={setGameCompleted}
        />
        <Block
          blocks={blocks}
          block="B"
          styles={styles}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          setBlocks={setBlocks}
          setMoves={setMoves}
          setGameCompleted={setGameCompleted}
        />
        <Block
          blocks={blocks}
          block="C"
          styles={styles}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          setBlocks={setBlocks}
          setMoves={setMoves}
          setGameCompleted={setGameCompleted}
        />
      </div>
      <div className="flex justify-around">
        <p className="text-center mt-4">
          Minimum Moves Required:{" "}
          <span className="">{MIN_MOVES[numberOfSlides]}</span>
        </p>
        <p className="text-center mt-4">
          Moves: <span className="">{moves}</span>
        </p>
      </div>
      {gameCompleted && (
        <GameCompletedPopUp
          moves={moves}
          OnRestart={handleRestart}
          chooseDifficultyClick={handleChooseDifficulty}
        />
      )}
    </div>
  );
}
