import React from "react";
import mp3List from "./mp3.json";
import { useState, useEffect } from "react";
import keyList from "./keyList.json";
import { Link, useNavigate, useParams } from 'react-router-dom';

function DashBoard (){



  const [data, setData] = useState([])
  const navigate = useNavigate();

    const makeAPICall = async () => {
      try {
        const response = await fetch('https://deploy-mern-api-render.vercel.app/api/keys', {mode:'cors'});
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


    return(
      <div className="container mx-auto px-3 py-3 bg-black">
          <h3 className="text-white text-center">Dashboard</h3>
          <p className="text-secondary text-center">Click Edit to change the Track</p>
          <div className="row mb-3 text-center">
          {data.map((e)=>{
                  return (
                    <div className="col-4 mb-2" key={e.keyNumber}>
                    <div className="card">
                        <h5 className="card-header">KEY: {e.keyNumber}</h5>
                        <div className="card-body">
                          <Link to={`/update/${e._id}`} className="btn btn-primary">Edit</Link>
                        </div>
                      </div>

                    </div>
          );})}




        </div>


      </div>
    )
}

export default DashBoard