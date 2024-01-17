import React from "react";
import mp3List from "./mp3.json";


function DashBoard (){

    return(
      <div className="container text-center mx-auto px-2 py-3 bg-black d-flex justify-content-start flex-wrap">
          <h1 className="text-white text-center">Dashboard</h1>
          {/** */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam maxime corporis vitae eligendi eius similique fugit non dolor deleniti illum suscipit quos omnis, quod inventore earum pariatur explicabo illo.</p>
          <table className="table bg-dark">
          <thead>
            <tr>
              <th scope="colSpan">#</th>
              <th scope="colSpan">Name</th>
              <th scope="colSpan">BPM</th>
              <th scope="colSpan">Position</th>
            </tr>
          </thead>
          {mp3List.map((e)=>{
                  return (
          <tbody>
            <tr>
              <th scope="row">{e.id}</th>
              <td>{e.trackName}</td>
              <td>{e.bpm}</td>
              <td>@mdo</td>
            </tr>

          </tbody>
          );})}
        </table>
      </div>
    )
}

export default DashBoard