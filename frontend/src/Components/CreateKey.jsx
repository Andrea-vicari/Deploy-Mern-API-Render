import React from "react";
import mp3List from "./mp3.json";
import { useState, useEffect } from "react";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UseAuthContext } from "../hooks/UseAuthContext";

function CreateKey (){

  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [mp3Url, setMp3URL] = useState([]);
  const {user} = UseAuthContext()


  const makeAPICall = async () => {
    try {
      const response = await fetch('https://deploy-mern-api-render.vercel.app/api/tracks/', {mode:'cors', headers:{
        'Authorization' : `Bearer ${user.token}`
      }});
      const data = await response.json();
      setMp3URL(data)
      console.log(data)

    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])


    return(
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-white mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4 text-white-50">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
              <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="KEY_1">KEY 1</option>
                  <option value="KEY_2">KEY 2</option>
                  <option value="KEY_3">KEY 3</option>
                  <option value="KEY_4">KEY 4</option>
                  <option value="KEY_5">KEY 5</option>
                  <option value="KEY_6">KEY 6</option>
                  <option value="KEY_7">KEY 7</option>
              </select>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>

            </form>
          </div>
        </div>
      </div>
    )
}

export default CreateKey