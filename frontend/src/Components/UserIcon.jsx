import React from 'react'
import { UseAuthContext } from "../hooks/UseAuthContext";
import { Link } from 'react-router-dom';

function UserIcon() {

  const {user} = UseAuthContext()

  return (

    <Link to="/login">
        <i className='fa fa-user-circle fs-1 acid-text'></i>
    </Link>
  )
}

export default UserIcon