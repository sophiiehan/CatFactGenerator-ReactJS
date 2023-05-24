import './App.css';
import { useEffect, useState } from "react";

function GetNewFact({onButtonClick}){
  return(
    <button className = "newButton" onClick = {onButtonClick}>
      Get New Cat Fact!
    </button>
  );
}


function App() {
  function fetchData(){
    fetch('https://schedule-yoyys2e5pq-uc.a.run.app/api/schedule',{
      method: "GET"
    })
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        // setFact(data.fact);
        // setLength(data.length);
      })
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [fact, setFact] = useState("");
  const [length, setLength] = useState(0);
   
  function handleClick(){
    fetchData();
  }

  return (
    <div className = "main">
      <p className = "catFact-title">Cat Fact of the day:</p>
      <p className = "catFact-content">{fact} </p>
      <p className = "catFact-length">This fact was {length} characters long. </p>
      <GetNewFact onButtonClick = {() => handleClick()}/>
    </div>
  );
}

export default App;
