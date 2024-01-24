import React from "react";
import { useState, useEffect } from "react";


function SingleKey (){

    const [data, setData] = useState([]);


    const makeAPICall = async () => {
        try {
          const response = await fetch('https://deploy-mern-api-render.vercel.app/', {mode:'cors'});
          const data = await response.json();
          setData(data)
          console.log({ data })
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        makeAPICall();
      }, [])

    function addColor (i){

      document.getElementById(i+300).classList.add("d-none");
      document.getElementById(i+200).classList.remove("playing");


    }


    const playSound = (i, trackName, trackID, trackUrl) => {

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");

        document.getElementById('MP3_display').innerHTML = `${trackName}`;

        console.log(i);

        let mp3_toplay = document.getElementById(trackName);
        console.log(mp3_toplay)

        console.log(trackUrl)

        mp3_toplay.play();

        mp3_toplay.onended = function (){
          addColor(i)
        }



    }


    return(
        data.map((d, i) => (
            <div key={d.id} id={100+i}>
                <button id={200+i} className="btn acid-green btn-sq-responsive" onClick={() => playSound(i, d.trackName, d.id, d.trackUrl)}>
                <span id={i+300} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={d.trackName} src={d.trackUrl}></audio>
                </button>
            </div>

     )))
}

export default SingleKey