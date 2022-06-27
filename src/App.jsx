import logo from './logo.svg';
import './App.css';
import PrincipalPage from './Components/PrincipalPage'
import PrincipalButtons from './Components/PrincipalButtons'
import Playing from './Components/Playing'
import GameOver from './Components/GameOver';

import {BrowserRouter,Route} from 'react-router-dom'




function App() {
  return (
       <BrowserRouter>
        
        <Route path="/" exact component={PrincipalPage} />
        <Route path="/" exact component={PrincipalButtons}/>
        <Route path="/playing" component={Playing}/>
        <Route path="/gameover" component={GameOver}/>
        <Route path="/*" component={GameOver}/>

       </BrowserRouter>
  );
}

export default App;
