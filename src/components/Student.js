import React from 'react'
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Student.css";

function Student() {
    const cookies = new Cookies();

    function logout() {
        cookies.remove('student');
    }
    return (
        <div>
            <a href="/edit-student" className="edit-profile">Edit Profile</a>
            <div className="assignments-name-container">
                <Link to="/upcoming-assignments" className="assignments-link" >Upcoming Assignments</Link>                
                <Link to="/submitted-files" className="assignments-link" >Submitted Assignments</Link>
                <a className="assignments-link logout-link" onClick={logout} href="/student-login">Logout</a>
            </div>
        </div>
    )
}

export default Student