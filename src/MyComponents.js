import React from "react";

export const One = () => {
    const [someValue,setValue] = React.useState("hi");

    console.log("리렌더링이 된다는건 이함수 다시 호출할거야")
    return (
        <div>
            <p>{someValue}</p>
            <button onClick={() => {setValue("바꾸기버튼누름")}}>바꾸기 버튼</button>
        </div>
    )
}