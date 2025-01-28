import { useState, useEffect } from "react";
import "./Timer.css";
import ButtonIncrease from "./ButtonIncrease";

export function Timer() {
  const [cookies, setCookies] = useState(0);

  const [cps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      // console.log("Timer starts!");
      setCookies((currentCookies) => {
        console.log(typeof currentCookies);
        return currentCookies + cps;
      });
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  return (
    <>
      <div className="timer">
        <p>{cookies}</p>
        <p>{cps} CPS</p>

        {/* passing cookies and setCookies */}
        <ButtonIncrease cookies={cookies} setCookies={setCookies} />
      </div>
    </>
  );
}
