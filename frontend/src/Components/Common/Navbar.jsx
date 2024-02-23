import React from "react";
import { Link } from "react-router-dom";
import { Display } from "../Display";
import UserIcon from "../UserIcon";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import reactlogogreen from "../Common/react_green.svg";
import { useLogout } from "../../hooks/useLogout";

function Navbar () {

    const { logout } = useLogout()

    const {user} = UseAuthContext()

    const handleLogout = () =>{
      logout()
    }


    return(
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <img className="navbar-brand" src={reactlogogreen}></img>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;