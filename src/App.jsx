import { useState } from 'react'

function App() {
  
     /*const [Num, setNum] = useState(50);
     const [userName, setuserName] = useState("devaaa");
    function changenum(){
      //console.log("HIII");
      setNum(30);
      setuserName("gyanendra")*/
    const [Num, setNum] = useState(0);
    function IncreaseNum(){
     // console.log("increasing");
      setNum(Num+1);
    }
    
    function DecreaseNum(){
     // console.log("Decreasing");
      setNum(Num-1);
    }

    function JumpNum(){
      setNum(Num+5);
    }
//add by 3-->
function add3(){
  setNum(prev=>(prev+1));
  setNum(prev=>(prev+1));
  setNum(prev=>(prev+1));
  
}


return (
   /*<div>
    <h1>value of num is {Num} <br></br> value of user  {userName}</h1>
    <button onClick={changenum}  > Click  </button>
    </div>*/

    <div>
      <h1>Counter App</h1>
      <h1> {Num} </h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum} >Decrease</button>
      <button onClick={JumpNum}>JUMP BY 5</button>
      <button onClick={add3}>add by 3</button>
    </div>

  );
}

export default App
