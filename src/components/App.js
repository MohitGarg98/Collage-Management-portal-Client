import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Student from "./Student";
import Teacher from "./Teacher";
import './App.css';
import Login from "./Login";
import UpcomingAssignment from "./Upcoming_Assignments";
import SubmittedAssignments from "./Submitted_Assignments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/upcoming-assignments" component={UpcomingAssignment} />
          <Route exact path="/submitted-assignments" component={SubmittedAssignments} />
          <Route exact path="/teacher" component={Teacher} />

        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;