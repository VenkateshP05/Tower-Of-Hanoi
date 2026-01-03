import React from "react";

export default function Block({
  blocks,
  block,
  styles,
  activeSlide,
  setActiveSlide,
  setBlocks,
  setMoves,
  setGameCompleted,
  blockName,
}) {
  const isCompleted = () => {
    if (block == "A") return;
    return blocks.every((slide) => slide.block == block);
  };

  const hanldeDrop = () => {
    if (activeSlide.block == block) return;

    const topSlide = blocks.find((slide) => slide.block == block);
    if (!!topSlide && activeSlide.id > topSlide.id) return;

    setMoves((prev) => prev + 1);
    activeSlide.block = block;
    const updatedBlocks = blocks.filter((slide) => slide.id != activeSlide.id);
    updatedBlocks.unshift(activeSlide);
    setBlocks(updatedBlocks);

    if (isCompleted()) {
      setGameCompleted(true);
    }
  };

  const handleDraggable = (index) => {
    return index == blocks.findIndex((slide) => slide.block == block);
  };

  return (
    <div
      className="w-1/3 h-full text-center items-center justify-end flex flex-col p-2 "
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={hanldeDrop}
    >
      <div className="w-full flex-grow flex justify-center items-end pt-5">
        <div className="bg-white w-1 rounded-t-sm h-full"></div>
      </div>
      {blocks.map(
        (slide, index) =>
          slide.block == block && (
            <p
              key={index}
              draggable={handleDraggable(index)}
              className={`${styles[slide.id]} ${
                handleDraggable(index) && "cursor-grab"
              }`}
              onDragStart={() => setActiveSlide(slide)}
              onDragEnd={() => setActiveSlide(null)}
            >
              {slide.id}
            </p>
          )
      )}
      <div className="bg-white w-full h-2"></div>
      <p className="text-2xl m-1">{block}</p>
    </div>
  );
}
