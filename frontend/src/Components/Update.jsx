import React from 'react'


function Update (){


   return(
        <main className="container">
                <form onSubmit="">

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