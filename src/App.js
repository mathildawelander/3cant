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
  question: 'Ta på en rolig hatt',
  active: 0
},
{
  question: 'Drick fulvin',
  active: 0
},
{
  question: 'Utbring en gemensam skål!',
  active: 0
},
{
  question: 'Ta reda på någons namn som för dig är okänt',
  active: 0
},
{
  question: 'Utmana någon på sten, sax, påse',
  active: 0
},
{
  question: 'Drick ett glas vatten',
  active: 0
},
{
  question: 'Vinn över en i 3Cant på häfv',
  active: 0
},
{
  question: 'Kör varje spel minst 1 gång',
  active: 0
},
{
  question: 'Kom top 3 på kahoot',
  active: 0
},
{
  question: 'Gör en synkad dans med minst 1 person(VISA)',
  active: 0
},
{
  question: 'Gör draken',
  active: 0
},
{
  question: 'Starta en snapsvisa',
  active: 0
},
{
  question: 'Hitta Rosa Cantén',
  active: 0
}
,
{
  question: 'Sjung karaoke',
  active: 0
},
{
  question: 'Nominera någon till 3Cant',
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
