import React from 'react';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';

function Teacher() {
    const cookies = new Cookies();
    function logout() {
        cookies.remove('teacher');
    }
    return (
        <div>
            <a href="/edit-teacher" className="edit-profile">Edit Profile</a>
            <div className="assignments-name-container">
                <a className="assignments-link" href="/add-assignments">Add Assignments</a>
                <Link to="/view-submission" className="assignments-link" >View Submissions</Link>                
                <a className="logout-link" onClick={logout} href="/teacher-login">Logout</a>
            </div>
        </div>
    )
}

export default Teacher
