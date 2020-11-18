import './App.css'
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Chat from './Chat.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
   <div className="app">
     <Router>
       <Header/>
       <div className="app__body">
         <Sidebar/>
         <Switch>
           <Route path="/room/:roomid">
             <Chat/>
           </Route>
           <Route path="/">
             <h2> Welcome </h2>
           </Route>
         </Switch>
       </div>
       </Router>
   </div>
  );
}

export default App;
