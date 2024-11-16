import React, { useState, useRef, useEffect } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import "./Timer.css";

function Timer({}) {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:20:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1200);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1 className="timer__clock">{timer}</h1>
      <h2 className="timer__instructions">
        Let yourself focus on this task until the timer goes off. You can also
        click below for an early break. Breaks give you the chance to relax,
        reset, and get a study tip.
      </h2>

      <ButtonLink to="/activitycomplete" className="studypage__break-btn">
        I need a break now.
      </ButtonLink>
    </div>
  );
}

export default Timer;
