import React from "react";

const Eventos=()=>{
    const click =()=>{console.log("Hiciste click");}
    return(
        <div>
            <h2>Eventos</h2>
            <button onClick={()=>click()}>Haz click</button>
        </div>
    )
}

export default Eventos