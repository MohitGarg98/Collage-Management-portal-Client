import React, {useState, useEffect } from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import Cookies from 'universal-cookie';

import Student from "./Student";
import Teacher from "./Teacher";
import UpcomingAssignment from "./Upcoming_Assignments";
import SubmittedAssignments from "./Submitted_Assignments";
import StudentLogin from "./Student_Login";
import StudentRegister from "./Student_Register";
import TeacherLogin from "./Teacher_Login";
import TeacherRegister from "./Teacher_Register";
import AddAssignments from "./Add_Assignments";
import ViewAssignment from "./View_Assignment";
import ViewSubmitAssignment from "./View_submit_assignment";
import ViewSubmission from "./View_Submission";
import SubmittedFiles from "./Submitted_Files";
import EditStudent from "./Edit_Student";
import EditTeacher from "./Edit_Teacher";

import { addAssignmentAct, submitAssignmentAct } from '../actions';

function App() {
  
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const studentCookie = cookies.get('student');
  const teacherCookie = cookies.get('teacher');

  const [isStudentAuth, setStudentAuth] = useState(false);
  const [isTeacherAuth, setTeacherAuth] = useState(false);
  
  function getData() {
    if(studentCookie){
      setStudentAuth(true);
    }
    if(teacherCookie){
      setTeacherAuth(true);
    }
    axios.get('http://localhost:9000/get-assignment')
    .then((response) => {
      dispatch(addAssignmentAct(response.data));
    });
    axios.get('http://localhost:9000/get-submit-assignment')
    .then((response) => {
      dispatch(submitAssignmentAct(response.data));
    });
  }
  useEffect(() => {
    getData()
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/student" component={isStudentAuth ? Student : StudentLogin} />
          <Route exact path="/student-login" component={isStudentAuth ? Student : StudentLogin} />
          <Route exact path="/student-register" component={isStudentAuth ? Student : StudentRegister} />
          <Route exact path="/upcoming-assignments" component={isStudentAuth ? UpcomingAssignment : StudentLogin} />
          <Route exact path="/submitted-assignments" component={isStudentAuth ? SubmittedAssignments : StudentLogin} />
          <Route exact path="/edit-student" component={isStudentAuth ? EditStudent : StudentLogin} />
          <Route exact path="/teacher" component={isTeacherAuth ? Teacher : TeacherLogin} />
          <Route exact path="/teacher-login" component={isTeacherAuth ? Teacher : TeacherLogin} />
          <Route exact path="/teacher-register" component={isTeacherAuth ? Teacher : TeacherRegister} />
          <Route exact path="/add-assignments" component={isTeacherAuth ? AddAssignments : TeacherLogin} />
          <Route exact path="/edit-teacher" component={isTeacherAuth ? EditTeacher : TeacherLogin} />
          <Route exact path="/view-assignment" component={ViewAssignment} />
          <Route exact path="/view-submit-assignment" component={ViewSubmitAssignment} />
          <Route exact path="/view-submission" component={ViewSubmission} />SubmittedFiles
          <Route exact path="/submitted-files" component={SubmittedFiles} />
        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;