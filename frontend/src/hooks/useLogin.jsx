import { useState } from "react";
import { UseAuthContext } from "../hooks/UseAuthContext"

export const useLogin = () =>{

    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const { user, dispatch } = UseAuthContext()

      const login = async (email, password) => {
        setisLoading(true)
        setError(null)

        const response = await fetch('https://deploy-mern-api-render.vercel.app/api/users/login', {
            mode:"cors",
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type': 'application/json'

              }

        })

        const json = await response.json();

        if(!response.ok){
            setisLoading(false)
            setError(json.error)
            alert("NOT OK")
        }

        if(response.ok){
            // Save the user to the localStorage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setisLoading(false)
        }

    }

    return {login, isLoading, error}

}