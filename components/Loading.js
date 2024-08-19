import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
