import React from "react";
import { useState, useEffect } from "react";
import { UseAuthContext } from "../hooks/UseAuthContext"


function SingleKeyUser (){

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()

    const makeAPICall = async () => {
        try {
          const response = await fetch('https://deploy-mern-api-render.vercel.app/api/keys/', {mode:'cors', headers:{
            'Authorization' : `Bearer ${user.token}`
          }});
          const data = await response.json();
          setData(data)

          console.log({ data })
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        if(user){
           makeAPICall();
        }

      }, [user])

      let filterKey = [];
      let terVar = false;
      let shortedKey = [];

      data.forEach(element => {
        element.user_id == user.user_id  ? filterKey.push(element) : terVar = true
        return filterKey
      });

      filterKey.length = 15;



    function addColor (i){

      document.getElementById(i+300).classList.add("d-none");
      document.getElementById(i+200).classList.remove("playing");


    }


    const playSound = (i, mp3Name, trackID, trackUrl) => {

        document.getElementById(i+300).classList.remove("d-none");
        document.getElementById(i+200).classList.add("playing");

       document.getElementById('MP3_display').innerHTML = `${mp3Name}`;

        console.log(i);

        let mp3_toplay = document.getElementById(trackUrl);
        console.log(mp3_toplay)

        console.log(trackUrl)

        mp3_toplay.play();

        mp3_toplay.onended = function (){
          addColor(i)
        }

    }


    return(
      filterKey.map((d, i) => (
            <div key={d.id} id={100+i}>
                <button id={200+i} className="btn acid-green btn-sq-responsive" onClick={() => playSound(i, d.mp3Name, d.id, d.trackUrl)}>
                <span id={i+300} className="spinner-border d-none spinner-border-sm" aria-hidden="true"></span>
                <audio className="clip" id={d.trackUrl} src={d.trackUrl}></audio>
                </button>
            </div>

     )))
}

export default SingleKeyUser