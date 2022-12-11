import React from "react";

function Highlight({ text }) {
  return (
    <div>
      <span
        className="bg-gradient-to-r from-cyan-300 to-green-100 dark:from-purple-800 dark:to-purple-900
        bg-[length:0px_10px]
        bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-450
        hover:bg-[length:100%_4px] group-hover:bg-[length:100%_10px]
        pb-2
        "
      >
        {text}
      </span>
    </div>
  );
}

export default Highlight;
