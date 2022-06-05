import './App.css';
import React from 'react';

function App() {

  const callSomething = async () => {
    const response = await fetch("http://localhost:5001/sleep_times");
  
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
