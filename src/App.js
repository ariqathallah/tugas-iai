import './App.css';
import Main from './components/main/Main';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <AuthState>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/signup" component={Signup} /> */}
            <div className="grid-main">
              {/* <div>
                <SideNavbar />
              </div> */}
              <div id="main-container">
                <div>
                  <PrivateRoute exact path="/" component={Main} />
                  {/* <PrivateRoute
                    exact
                    path="/DataAnalitik"
                    component={DataAnalitik}
                  /> */}
                </div>
              </div>
            </div>
          </Switch>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
