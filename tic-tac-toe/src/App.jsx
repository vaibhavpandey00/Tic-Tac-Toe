import React, { useEffect, useState } from 'react'

const App = () => {
  const result = "flex";
  const [plc0, setPlc0] = useState("X")
  const [plc1, setPlc1] = useState("")
  const [plc2, setPlc2] = useState("")
  const [plc3, setPlc3] = useState("")
  const [plc4, setPlc4] = useState("X")
  const [plc5, setPlc5] = useState("")
  const [plc6, setPlc6] = useState("")
  const [plc7, setPlc7] = useState("")
  const [plc8, setPlc8] = useState("X")

  let board = [
    [plc0, plc1, plc2],
    [plc3, plc4, plc5],
    [plc6, plc7, plc8]
  ]

  let ai = "X";
  let human = "O";
  let currentPlayer = human;

  useEffect(() => {
    move();
  },)


  const move = () => {
    // 1st row
    if ((board[0][0] != "") && (board[0][0] === board[0][1]) && (board[0][1] === board[0][2])) {
      console.log("Winner");
    }
    // 2nd row
    else if ((board[1][0] != "") && (board[1][0] === board[1][1]) && (board[1][1] === board[1][2])) {
      console.log("Winner");
    }
    // 3rd row
    else if ((board[2][0] != "") && (board[2][0] === board[2][1]) && (board[2][1] === board[2][2])) {
      console.log("Winner");
    }
    // 1st col
    else if ((board[0][0] != "") && (board[0][0] === board[1][0]) && (board[1][0] === board[2][0])) {
      console.log("Winner");
    }
    // 2nd col
    else if ((board[0][1] != "") && (board[0][1] === board[1][1]) && (board[1][1] === board[2][1])) {
      console.log("Winner");
    }
    //3rd col
    else if ((board[0][2] != "") && (board[0][2] === board[1][2]) && (board[1][2] === board[2][2])) {
      console.log("Winner");
    }
    // Diagonal (0,0)(1,1)(2,2)
    else if ((board[0][0] != "") && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
      console.log("Winner");
    }
    // Diagonal (0,2)(1,1)(2,0)
    else if ((board[0][2] != "") && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
      console.log("Winner");
    }
    else {

    }
  }

  const handleClick = () => {

  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white bg-slate-800">

      <div className="w-3/5 h-4/5 flex flex-col justify-center items-center gap-10 border">

        <h1>
          Score X : { } O : { }
        </h1>

        <div className="w-2/6 h-3/6 bg-white grid grid-cols-3 grid-rows-3 gap-1">
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" id='1' onClick={handleClick}>{plc0}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" id='2' onClick={handleClick}>{plc1}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc2}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc3}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc4}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc5}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc6}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc7}</div>
          <div className="text-5xl cursor-pointer bg-slate-800 flex justify-center items-center border" onClick={handleClick}>{plc8}</div>
        </div>
      </div>

      <div className={`hidden w-full h-screen absolute top-0 left-0 backdrop-blur-sm bg-white/10 ${result} justify-center items-center`}></div>
    </div>
  )
}

export default App