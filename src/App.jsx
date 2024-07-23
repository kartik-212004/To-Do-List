import { useState } from "react";
import todo from "./assets/calendar.png"
import dustbin from "./assets/delete.png"
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
      <div className=" h-screen w-full  absolute inset-0 -z-10  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <nav>
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
                      < li key={index} className="flex flex-row justify-between items-center">
                        <span id="task" className="text-[20px] sm:text-3xl ">{sport}</span>
                        <img onClick={() => (remove(index))} className="invert  w-9 " src={dustbin} alt="" />
                      </li>))
                  }


                </ul>
              </div>
            </div>
          </div>
        </nav >
      </div >
    </>
  )
}
