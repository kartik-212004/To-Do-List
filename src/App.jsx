import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import todo from "./assets/calendar.png"
import dustbin from "./assets/delete.png"
import { Link } from 'react-router-dom';
import instagram from './assets/instagram-2016-logo-svgrepo-com.svg'
export default function App() {
  const [sport, useSport] = useState([]);
  let c = 0;
  function add() {
    let value = document.getElementById("input").value;
    if (value)
      useSport([value.charAt(0).toUpperCase() + value.slice(1), ...sport]);
    document.getElementById("input").value = "";
  }
  function remove(index) {
    useSport(sport.filter((_, i) => (i != index)))
  }
  function hide() {
    let change = document.getElementById("input").value;
    if (change.length > 0) {
      document.getElementById("hide").style.display = "none";
    }
  }

  return (
    <>
      <div>
        <div className=" w-full  absolute inset-0 -z-10  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <nav className="h-[95vh]">
            <ul className="bg-black font-semibold sm:h-12 h-8 items-center flex text-2xl text-white flex-row justify-around">
              <li className=" sm:text-2xl text-[13px]">Task</li>
              <li>
                <span className="px-11 sm:text-2xl text-[13px]">Home</span>
                <span className=" sm:text-2xl text-[13px]">Task History</span>
              </li>
            </ul>
            <div className="main w-full h-[700px] flex flex-col items-center mt-10">
              <div className="title flex flex-row items-center">
                <div className="img flex items-center">
                  <img className=" size-12 mr-5" src={todo} alt="" />
                </div>
                <h1 className="sm:text-5xl text-3xl font-medium">To-Do-List</h1>
              </div>
              <div>
                <div className="add flex justify-center container mt-12 sm:w-full w-96 ">
                  <input onChange={hide} id="input" type="text" className="w-[200px] h-12 relative top-0 sm:w-[450px] placeholder:pl-3 sm:placeholder:text-2xl placeholder:text-gray-500 outline-none sm:h-20 rounded-full pl-12 sm:text-2xl  bg-slate-100 pr-[6.5rem]" placeholder="Add Your Text" />
                  <button onClick={add} type="submit" className="sm:text-2xl h-12 w-20 text-white top-0 sm:font-medium drop-shadow-2xl sm:h-20 sm:w-44 bg-orange-500 rounded-full">Add +</button>
                </div>
                <div id="hide" className="mt-6 addlist text-zinc-500 sm:text-5xl text-3xl font-medium text-center">Add Your To-do</div>
                <div className="listbox  w-full mt-10">
                  <ul className="list-decimal">
                    {
                      sport.map((sport, index) => (
                        < li key={index} className="flex flex-row justify-between my-5 items-center">
                          <span id="task" className="text-[20px] sm:text-3xl ">{sport}</span>
                          <img onClick={() => (remove(index))} className="invert  w-9 " src={dustbin} alt="" />
                        </li>))
                    }


                  </ul>
                </div>
              </div>
            </div>
          </nav >
          <ul className='flex flex-row justify-around border border-y-black bg-gray-200 font-semibold h-[5vh] items-center text-2xl'>
            <div className="box">
              <li>&copy;Btech Cse 2023-2027. All rights reserved.</li>
            </div>
            <div>

              <div className="links flex flex-row space-x-6">
                <li className='flex items-center'>Follow me:</li>
                <a target="_blank" href="https://github.com/kartik-212004">
                  <span>
                    <svg height="25px" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="25px" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/kartikbhatt2004/"><span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" class="mercado-match" width="25px" height="25px" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </span></a>
                <a href="https://www.instagram.com/karrtikbhatt/">
                  <span>
                    <img src={instagram} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </ul>
        </div >
      </div>
    </>
  )
}
