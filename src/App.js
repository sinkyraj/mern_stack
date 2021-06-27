import {
  BrowserRouter as Router,
  Switch,
  Route
   
} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className="App">
      {/* <h1>This is App</h1> */}
      {/* <button className="btn btn-primary">Click Me</button> */}
      {/* <Button color='primary'>Click Me</Button> */}
      <Router>
        <Navbar/>
       <div>
       <Switch>

              <Route exact path='/mern_stack/'>
          <Home />
         </Route>
          <Route path='/mern_stack/Profile'>
          <Profile />
         </Route>
       </Switch>

       </div>

      </Router>
       
    </div>
    </>
  );
}

export default App;
