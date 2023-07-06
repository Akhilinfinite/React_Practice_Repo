import React from "react";

function Redirecting(){
    return(
        <>
        <>
        <h1>React</h1>
        </>8
        <button onClick={clickhandler}>Google</button>
        <button onClick={clickeyoutube}>Youtube</button>
        </>
    );
    function clickhandler(){
        window.open("https://www.google.com");
    }
    function clickeyoutube(){
        window.open("https://www.youtube.com/");
    }
}

export default Redirecting;