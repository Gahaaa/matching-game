import React from 'react'
import {useEffect } from 'react';

const StopWatch = ({isRunning, time, setTime,getTimeFormatString}) => {
  //   타이머
  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [time, isRunning]);



  return (
    <div>
        <p id="stopwatch" >{getTimeFormatString(time)}</p>
    </div>
    
    
  )
}

export default StopWatch;