import './App.css';
import Main from './components/main/Main';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
