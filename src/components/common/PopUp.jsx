import React from "react";

export default function PopUp({ children, ...props }) {
  return (
    <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center backdrop-blur-xl">
      <div className="p-5 rounded-md flex flex-col items-center justify-center border-gray-200 border-2">
        {children}
      </div>
    </div>
  );
}
