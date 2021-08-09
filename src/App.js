import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import AccountList from "./Component/AccountList";
import createacc from "./Component/CreateAcc";
import Dashboard from "./Component/Dashboard";
import LoginPage from './Component/LoginPage';

function App() {
  return (
<Router>
      <Switch>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/navbar" component={createacc}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/createacc" component={createacc}></Route>
          <Route exact path="/accview" component={AccountList}></Route>
        </Switch>
   </Router>
  );
}
export default App;
