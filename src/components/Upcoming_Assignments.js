import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./Upcoming_Assignments.css";

function Upcoming_assignment() {    
    const state = useSelector(state => state);
    const allAssignment = state.assignments[0];

    return (
        <div>
            <h1 className="up-assignments-heading">Upcoming Assignments</h1>
            <div className="up-assignments-container">
                <ul className="assignments-heading-ul">
                    <li className="assignments-heading-li">Assignment Name</li>
                    <li className="assignments-heading-li">View File</li>
                    <li className="assignments-heading-li">Deadline</li>
                </ul>
                {allAssignment.map((a, index) => (
                     <ul  key={index} className="assignments-ul">
                        <li className="assignments-li">{a.title}</li>
                        <li className="assignments-li"><Link to={{
                            pathname: "/view-assignment", 
                            param1: a
                        }}>View</Link></li>
                        <li className="assignments-li">{a.deadline}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Upcoming_assignment;
