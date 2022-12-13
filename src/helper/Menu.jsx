import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="flex w-full flex-col space-y-5 max-w-8xl container mx-auto items-center text-xl  underline decoration-cyan-600/30 font-bold pt-3 pb-6 ">
        <Link className="">
          World<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link>
          Business<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link>
          Politics<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link>
          Sports<span className="text-cyan-600 text-2xl">.</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
