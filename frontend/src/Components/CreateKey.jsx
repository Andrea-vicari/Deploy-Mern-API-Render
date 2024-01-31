import React from "react";
import mp3List from "./mp3.json";
import { useState, useEffect } from "react";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UseAuthContext } from "../hooks/UseAuthContext";

function CreateKey (){


    const [keyNumber, setKeyNumber] = useState('')
    const [trackUrl, setTrackUrl] = useState('')
    const [error, setError] = useState(null)
    const {user} = UseAuthContext()
    const {user_id, setUser} = useState('')

    const handleSubmitKey = async (e)=>{
            e.preventDefault()

            console.log(user.email)



            const key = {keyNumber, trackUrl, user_id};



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
              setError(json.error)
              alert(error)
              return
            }
            if(response){
              setKeyNumber('')
              setTrackUrl('')
              setUser(user_id)
              setError(null)
              alert('New Key added', json)
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
            <label>
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
              <strong>TrackUrl</strong>
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
          <button type="submit" className="btn btn-success w-100 rounded-0" onChange={()=>setUser({user_id})}>
            Sign Up
          </button>

          </form>
          </div>
        </div>
      </div>
    )
}

export default CreateKey