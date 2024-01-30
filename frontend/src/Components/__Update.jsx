import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UseAuthContext } from "../hooks/UseAuthContext"

function Update (){

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

    // Play Function
    function playMp3(toPlay){
      let mp3ToPlay = document.getElementById(toPlay);
      mp3ToPlay.play()
    }
    // Stop Function
    function stopMp3(toPlay){
      let mp3ToPlay = document.getElementById(toPlay);
      mp3ToPlay.pause()
    }

    const {id} = useParams();

    console.log(id)
    const navigate = useNavigate();

    function openModal(trackName){
      document.getElementById(trackName).classList.add('d-block')
    }


      const handleClick = async (trackUrl, trackName)=>{

            openModal(trackName);

            if(!user){
              setError('Devi essere loggato')
              return
            }


            const key = {trackUrl, trackName, };


            const response = await fetch(`https://deploy-mern-api-render.vercel.app/api/keys/${id}`,{
              mode:"cors",
              method : 'PATCH',
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


      }

    return(
        <main className="container">

                    <h1 className="h1 mb-3 text-white">Edit Key</h1>
                    <p className="text-white">Choose the Track for this key from a collection of more than 30 tracks</p>
          <div className="container-fluid d-flex flex-wrap px-0 justify-content-center">
                    {mp3Url.map((e)=>{
                      return (

                          <div className="col-5 mb-2 mx-2" key={e._id}>
                          <div className="card">
                              <h5 className="fs-6 card-header">{e.trackName}</h5>
                              <div className="card-body">
                              <audio className="clip" id={e.trackName} src={e.trackUrl}></audio>
                              <i className="fa fa-play  w-100 py-2 mb-2 mx-1" type="submit" onClick={()=>playMp3(e.trackName)}> Play</i>
                              <i className="fa fa-pause  w-100 py-2 mb-2 mx-1" type="submit" onClick={()=>stopMp3(e.trackName)}> Pause</i>
                              <i className="fa fa-save  w-100 py-2 mx-1" type="submit" onClick={()=>handleClick(e.trackUrl, e.trackName)}> Use Track</i>
                              </div>


                            </div>

                            <div key={e._id} id={e.trackName} className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog">
                              <div className="modal-dialog modal-xl bg-dark" role="document">
                                <div className="modal-content rounded-4 shadow bg-dark">
                                  <div className="modal-header d-block">
                                    <h2 className="modal-title text-white">GOOD</h2>
                                </div>
                                  <div className="modal-body py-3 text-white">

                                  <h4 className="text-white mt-3 fw-bold">Ciao</h4>
                                    </div>
                                    <div className="modal-body py-3 text-white" id="modal_cont">
                                    <p className='fs-5'>
                                      Lorem Ipsum figa
                                    </p>
                                    <div>
                                    </div>


                                    </div>

                                  <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                                    <div className="modal-footer">
                                      <button type="button" onClick={()=>closeModal(i)} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                                      <i className='fa fa-times px-2 fs-4'></i>Close
                                        </button>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            </div>
                          </div>

                    );})}

          </div>

        </main>
    )

}

export default Update