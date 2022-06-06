import './App.css';
import React from 'react';

function App() {

  const callSomething = async () => {
    let data = {
      "day": "일",
      "sleep_times": "10:00",
    };
    let response = await fetch("http://localhost:5001/sleep_times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data),
    });
    console.log(response);

  }

  React.useEffect(() => {
    callSomething();
  },[]);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
