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
            <nav className="navbar navbar-dark bg-black" aria-label="DrumPadmenu">
                <div className="container-fluid">

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;