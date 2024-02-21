import { useState } from "react";
import { UseAuthContext } from "../hooks/UseAuthContext";

export const useSignup = () =>{

    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const { user, dispatch  } = UseAuthContext()

    const signup = async (email, password) => {
        setisLoading(true)
        setError(null)

        const response = await fetch('https://deploy-mern-api-render.vercel.app/api/users/signup', {

            method: 'POST',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type': 'application/json'
              }

        })

        function gotoDash(){
            navigate('/dashboard')
        }

        const json = await response.json();

        if(!response.ok){
            setisLoading(false)
            setError(json.error)
            alert("NOT OK")
            gotoDash()
        }

        if(response.ok){
            // Save the user to the localStorage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setisLoading(false)
        }

    }

    return {signup, isLoading, error}

}