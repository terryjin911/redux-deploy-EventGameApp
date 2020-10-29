import React from "react";

import Counter from "../components/Counter";
import TopHeader from "../components/TopHeader";

const Game = () => {
  return (
    <div>
      <TopHeader />

      {/* 스코어버튼 */}
      <Counter />
    </div>
  );
};

export default Game;
