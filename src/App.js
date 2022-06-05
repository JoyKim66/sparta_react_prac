import './App.css';
import React from 'react';

function App() {

  React.useEffect(() => {
    let xhr = new XMLHttpRequest();
    // 0 어떤 객체는 만들었어 근데 아무것도 안한상태
    xhr.open("GET", "http://localhost:5001/sleep_times");
    //1 open은 헀어 호출은 한상태
    xhr.send();
    //2 우리입장에서 보내기는 한 상태 
    //3 응답요청을 보내놨으니까 기다리는 상태
    //4 요청이 끝난 상태 서버가 응답을하고 우리가 받아온상태
    //XMLHttpRequset.readyState가 변경이 될때마다 어떤 콜백함수호출
    //readyState 는 0~4번 까지의 상태

    //데이터는 2가지로 가져올수있음 
    //1번째방법
    xhr.onreadystatechange = function() {
      // console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    }
    //2번째 방법
    xhr.onload = function() {
      console.log(xhr.responseText);
    }

  },[]);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
