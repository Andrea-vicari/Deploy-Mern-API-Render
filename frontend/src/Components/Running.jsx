import React from "react";
import { useState, useEffect } from "react";

const Running = () => {

    const [isRunning, setIsRunning] = useState(true);

    useEffect(()=>{

      if(isRunning == true){

        const someInterval = setInterval

      }

    }


    )


    return (
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "ON" : "OFF"}</button>
    );
  };
export {Running};