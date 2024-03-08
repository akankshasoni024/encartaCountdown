import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import "../../assets/fonts/fonts.css";
import ConfettiExplosion from "react-confetti-explosion";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExploding, setIsExploding] = React.useState(false);

  const deadline = "March, 20, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    Date.parse(deadline) == Date.now && setIsExploding(true);
  }, []);
  return (
    <div className="wrapper">
      <div className="header">ENCARTA v24.0</div>
      <div className="timer">
        <div className="block">{days}</div>
        <div className="down"> Days</div>
        <div className="block">{hours}</div>
        <div className="confetti"> {isExploding && <ConfettiExplosion />}</div>:
        <div className="block">{minutes}</div>:
        <div className="block">{seconds}</div>
      </div>
    </div>
  );
};

export default Timer;
