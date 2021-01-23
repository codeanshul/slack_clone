import './App.css'
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Chat from './Chat.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {

  // const [user,setUser] = useState(null);
  const [{ user },dispatch] = useStateValue();

  return (
   <div className="app">
     <Router>
       {!user? (
         <Login/>
       ) :
       (<>
       <Header/>
       <div className="app__body">
         <Sidebar/>
         <Switch>
           <Route path="/rooms/:roomid">
             <Chat/>
           </Route>
           <Route path="/">
             <h2> Welcome </h2>
           </Route>
         </Switch>
       </div>
       </>
       )
       }
       </Router>
   </div>
  );
}

export default App;
