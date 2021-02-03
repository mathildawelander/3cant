import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import TheButtons from './Components/TheButtons.js';
import React, { useState } from "react";


var data= [
{
  question: 'Sök 3Cant',
  active: 0
},
{
  question: 'Spela beerpong med annan grupp (breakoutroom',
  active: 0
},
{
  question: 'Drick fulvin',
  active: 0
},
{
  question: 'fråga 4',
  active: 0
},
{
  question: 'fråga 5',
  active: 0
},
{
  question: 'fråga 6',
  active: 0
},
{
  question: 'fråga 7',
  active: 0
},
{
  question: 'fråga 8',
  active: 0
},
{
  question: 'fråga 9',
  active: 0
},
{
  question: 'fråga 10',
  active: 0
},
{
  question: 'fråga 11',
  active: 0
},
{
  question: 'fråga 12',
  active: 0
},
{
  question: 'fråga 13',
  active: 0
},
{
  question: 'fråga 14',
  active: 0
}
,
{
  question: 'fråga 15',
  active: 0
},
{
  question: 'fråga 16',
  active: 0
}


];

function App() {
  return (
    <div className="App">
       <h1> 3Cants bingo! </h1>
     
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route path="">
            <TheButtons task= {data}/>
          </Route>
          </Switch> 
      </Router>
    
    </div>
  );
}

export default App;
