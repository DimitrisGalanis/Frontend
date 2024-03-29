import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="flex w-full flex-col space-y-5 max-w-8xl container mx-auto items-center text-xl  underline decoration-cyan-600/30 font-bold pt-3 pb-6 ">
        <Link to="/kosmos">
          Κόσμος<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link to="/oikonomia">
          Οικονομια<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link to="/politiki">
          Πολιτική<span className="text-cyan-600 text-2xl">.</span>
        </Link>
        <Link to="/sports">
          Sports<span className="text-cyan-600 text-2xl">.</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
