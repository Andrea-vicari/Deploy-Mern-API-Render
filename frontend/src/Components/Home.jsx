import React from "react";
import KeyboardDemo from "./KeyboardDemo";


function Home (){

    return(
        <div className="container d-flex align-items-end justify-content-center">
          <div className="align-items-center pt-3 pb-3 container mx-auto px-0 py-1 bg-black d-flex justify-content-center flex-wrap">
              <KeyboardDemo />

            </div>
        </div>

    )
}

export default Home