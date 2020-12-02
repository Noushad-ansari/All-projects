import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import LiveConsultation from "./components/LiveConsultation/LiveConsultation"
import BuyPlans from "./components/BuyPlans/BuyPlans"
import ViewPlans from "./components/ViewPlans/ViewPlans"
import LogIn from "./components/LogIn/LogIn"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Switch>
        <Route exact path="/" component={LiveConsultation}/>
        <Route exact path="/buyplans" component={BuyPlans}/>
        <Route exact path="/viewplans" component={ViewPlans}/>
        <Route exact path="/login" component={LogIn}/>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
