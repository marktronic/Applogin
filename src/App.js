import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Componentes/Login' ;
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import About   from './Componentes/About' ;
import Register from './Componentes/Register' ;
import Welcome from './Componentes/Welcome' ;
function App() {

  return (
   
   <BrowserRouter>
    <div className="App">
      <header className="App-header">
      
    
         <Switch>
            <Route
              exact path="/about"
              component={About} />  
            <Route
              exact path="/register"
              component={Register} />  
             <Route
             exact path="/"
             component={Login} />  
              <Route
             exact path="/Welcome"
             component={Welcome} />  
          </Switch>    
       </header>
    </div>

 </BrowserRouter>
  );
}

export default App;
