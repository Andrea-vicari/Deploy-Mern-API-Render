import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Update (){

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        trackURL: '',

    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://deploy-mern-api-render.vercel.app/api/tracks/')
        .then(res => setInputData(res.data))
        .then(console.log(inputData))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('https://deploy-mern-api-render.vercel.app/api/tracks/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


    return(
        <main className="container">
                <form onSubmit={handleSubmit}>

                    <h1 className="h3 mb-3 text-white">Edit: {id}</h1>
                    <p className="text-white">Choose the Track for this key</p>
                    <div className="form-floating">


                    <select className="form-select mb-2" aria-label="Default select example">

                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Confirm</button>

                </form>
        </main>
    )

}

export default Update