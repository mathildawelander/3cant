import './Home.css';

import React, { useState } from "react";

const buttonStyle = {
    //color: "#cd5b5f",
    backgroundColor: "black" ,
    shadow: "0 10px 10px 0 rgba(121, 81, 112, 0.568), 0 10px 10px 0 rgba(136, 85, 125, 0.19)",
    border:" 1px solid black"
}



const Tasktoggle = ({question, active}) => {
    const [activetask, setActive] = useState(0);

    
    return (
        <div>
            {
                (activetask ===1)?
                ( <div class="Thetask" style={buttonStyle } onClick={()=>setActive(0)} > 
                {question} </div>):
                ( <div class="Thetask"  onClick={()=>setActive(1)} > 
                 {question}</div>)
            }
    </div>
    )
}

export default Tasktoggle