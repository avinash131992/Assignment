import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [sec,setSec] = useState(0)
  const [min,setmin] = useState(0)
  const [hr,sethr] = useState(0)
  const [isrunning,setRunning] = useState(true);
  const [disableddata,setdisabled] = useState(false);

  useEffect(() => {
    let interval = null;
    // Initially we assign isrunning = true
    if(!isrunning){
      interval = setInterval(()=>{
             setSec(sec + 1)
                if(sec === 60){
                  setmin(min + 1);
                  setSec(0)
                }
                if(min === 60){
                  sethr(hr + 1);
                  setmin(0)
                }
      },800)
    }
    else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  },[sec,min,hr,isrunning]);

  const start = ()=>{
    setRunning(false);
    setdisabled(true);
  }

  const stop=()=>{
    setRunning(true);
    setdisabled(false);
  }
  const reset = ()=>{
    setRunning(true);
    setSec(0);
    setmin(0);
    setdisabled(false);

  }


  return (
    <div className="container text-center">
    <h1>Stopwatch</h1>
    
    <h3>{hr}:{min}:{sec}</h3>

    <div className="btn-group">
      <button className='btn btn-success' disabled={disableddata}  onClick={start}>Start</button>
      <button className='btn btn-danger'    onClick={stop}>Stop</button>
      <button className='btn btn-warning'    onClick={reset}>Reset</button>
    </div>
  </div>
  );
}

export default App;
