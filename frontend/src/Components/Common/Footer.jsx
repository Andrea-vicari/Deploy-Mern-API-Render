import React from "react";
import reactlogo from "../Common/react_green.svg";
function Footer() {

    return(
      <div className="container bg-black">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src={reactlogo} width="25"></img>
          </a>
          <span className="mb-3 mb-md-0 text-white">© 2023 React Drum Machine</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>

        </ul>
      </footer>
    </div>

    )
}

export default Footer;