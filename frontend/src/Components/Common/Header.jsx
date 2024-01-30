import React from "react";
import { Link } from "react-router-dom";
import { Display } from "../Display";
import AudioRecorder from "../AudioRecorder";
import { LogoTemp } from "../LogoTemp";
import { UseAuthContext } from "../../hooks/UseAuthContext";

import { useLogout } from "../../hooks/useLogout";
function Header () {

    const { logout } = useLogout()

    const {user} = UseAuthContext()

    const handleLogout = () =>{
      logout()
    }

    return(
        <div className="container bg-black">
            <div className="row py-3">
              <div className="col-4 text-center">
                  <LogoTemp/>
              </div>
              <Display />
              <div className="col-4 text-white fs-3 d-flex justify-content-end align-items-center">
              <i className="fa fa-bars text-blue-react" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark" aria-controls="offcanvasDark"></i>

                    <div className="offcanvas offcanvas-top offcanvas-dark bg-black" data-bs-scroll="true" tabIndex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                        <i type="button" className="fa fa-times btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                      </div>
                      <div className="offcanvas-body">
                      <div className="list">
                        <ul className="list-unstyled">
                          <li>
                          <Link to="/">
                            DrumPad
                            </Link>
                            </li>
                            <li>
                             <Link to="/dashboard" >
                            Dashboard
                            </Link>
                            </li>

                            {user && (
                               <div>
                              <li className="text-white">{user.email}</li>
                            <li className="btn" onClick={handleLogout}>Logout</li>
                            </div>
                            )
                            }







                        </ul>

                      </div>

                      </div>
                    </div>
              </div>
          </div>

        </div>
    )
}

export default Header;