import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Update (){

    const [mp3Url, setMp3URL] = useState([]);

    const makeAPICall = async () => {
        try {
          const response = await fetch('https://deploy-mern-api-render.vercel.app/api/tracks/', {mode:'cors'});
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

    const {id} = useParams();


    const navigate = useNavigate();


      // Here the Crud operation



    return(
        <main className="container">

                    <h1 className="h3 mb-3 text-white">Edit: {id}</h1>
                    <p className="text-white">Choose the Track for this key</p>

                    {mp3Url.map((e)=>{
                  return (
                    <div className="col-3 mb-2" key={e._id}>
                    <div className="card">
                        <h5 className="card-header">TrackName: {e.trackName}</h5>
                        <div className="card-body">
                        <audio className="clip" id={e.trackName} src={e.trackUrl}></audio>
                        </div>
                      </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Confirm</button>
                    </div>
                    );})}




        </main>
    )

}

export default Update