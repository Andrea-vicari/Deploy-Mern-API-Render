import React from "react";
import mp3List from "./mp3.json";
import { useState, useEffect } from "react";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UseAuthContext } from "../hooks/UseAuthContext";

function CreateKey (){

  const [data, setData] = useState([])
  const navigate = useNavigate();


    const makeAPICall = async () => {
      try {
        const response = await fetch('https://deploy-mern-api-render.vercel.app/api/keys/', {mode:'cors'});
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



    const [keyNumber, setKeyNumber] = useState('')
    const [trackUrl, setTrackUrl] = useState('')
    const {user} = UseAuthContext()


    const handleSubmitKey = async ()=>{

            if(!user){
              setError('Devi essere loggato')
              return
            }


            const key = {keyNumber, trackUrl, user};

            console.log(key)


            const response = await fetch(`https://deploy-mern-api-render.vercel.app/api/keys/`,{
              method : 'POST',
              body: JSON.stringify(key),
              headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
              }
            })

            const json = await response.json();

            if(!response.ok){
              return alert("NOT OK")
            }
            if(response){
              return alert(json)
            }

    }
    return(
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-white mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4 text-white-50">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={handleSubmitKey}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Key Number</strong>
            </label>
            <input
              type="number"
              placeholder="Key Number"
              autoComplete="off"
              name="keyNumber"
              className="form-control rounded-0"
              onChange={(e) => setKeyNumber(e.target.value)}
              value={keyNumber}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="string"
              placeholder="Enter trackUrl"
              name="trackUrl"
              className="form-control rounded-0"
              onChange={(e) => setTrackUrl(e.target.value)}
              value={trackUrl}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>

          </form>
          </div>
        </div>
      </div>
    )
}

export default CreateKey