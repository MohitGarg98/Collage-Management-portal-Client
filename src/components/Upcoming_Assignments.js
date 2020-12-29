import React from 'react';
import "./Upcoming_Assignments.css";

function Upcoming_assignment() {
    return (
        <div>
            <h1 className="assignments-heading">Upcoming Assignments</h1>
            <div className="assignments-header">
                <ul className="assignments-ul">
                    <li className="assignments-li">Assignment Name</li>
                    <li className="assignments-li">Deadline</li>
                    <li className="assignments-li">Upload File</li>
                </ul>
            </div>
        </div>
    )
}

export default Upcoming_assignment
