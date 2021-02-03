import './Home.css';
import React, { useState } from "react";
import Tasktoggle from './Tasktoggle'

const TheButtons = ({ onInput, task }) => {

  
  return (
    <div class="TheButtons">
      
      <div class ="thefirst">
 <Tasktoggle  question={task[0].question} active={0}  >  </Tasktoggle> 
 <Tasktoggle  question={task[1].question} active={0}  >  </Tasktoggle> 
 <Tasktoggle  question={task[2].question} active={0}  >  </Tasktoggle> 
 <Tasktoggle  question={task[3].question} active={0}  >  </Tasktoggle> 
  </div>

      
      <div class ="thesec">
      <Tasktoggle  question={task[4].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[5].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[6].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[7].question} active={0}  >  </Tasktoggle> 
  </div>

      
      <div class ="thethr">
      <Tasktoggle  question={task[8].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[9].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[10].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[11].question} active={0}  >  </Tasktoggle> 
  </div>

      
      <div class ="thefou">
      <Tasktoggle  question={task[12].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[13].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[14].question} active={0}  >  </Tasktoggle> 
      <Tasktoggle  question={task[15].question} active={0}  >  </Tasktoggle> 
 
      </div>


    </div>
  );
}
export default TheButtons;