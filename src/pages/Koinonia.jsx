import { useState, useEffect } from "react";

function Koinonia() {
  const [dt, setDt] = useState(new Date().toLocaleString());

  function pm(pm) {
    if (pm > 12) return "PM";
    return "AM";
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setDt(
        new Date().getDate().toLocaleString() +
          "/" +
          (1 + new Date().getMonth()).toLocaleString() +
          "/" +
          new Date().getFullYear().toLocaleString().replace(".", "") +
          " " +
          new Date().getHours().toLocaleString() +
          ":" +
          new Date().getMinutes().toLocaleString() +
          " " +
          pm(new Date().getHours().toLocaleString()).toString()
      );
    }, 1000 * 600000); // 1minute refresh

    return () => clearInterval(timer);
  }, []);

  return <div>{dt}</div>;
}

export default Koinonia;
