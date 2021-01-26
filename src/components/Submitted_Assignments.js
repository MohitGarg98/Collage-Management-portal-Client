import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Submit_Assignments(props) {
    const user = props.user;
    const state = useSelector(state => state);
    const allSubmitedAssignment = state.submitedAssignment[0];
    return (
        <div>
            <h1 className="up-assignments-heading">Submitted Assignments</h1>
            <div className="up-assignments-container">
                <ul className="assignments-ul">
                    <li className="assignments-heading-li">Assignment Name</li>
                    <li className="assignments-heading-li">Assignment File</li>
                    <li className="assignments-heading-li">Submitted File</li>
                    <li className="assignments-heading-li">Grade</li>
                </ul>
                {allSubmitedAssignment ? allSubmitedAssignment.map((a, index) => (
                     <ul key={index} className="assignments-ul">
                        <li className="assignments-li">{a.assignment_title}</li>
                        <li className="assignments-li"><Link to={{
                            pathname: "/view-submit-assignment", 
                            fileName: a.assignment_pdf,
                            file: "assignment",
                            user
                        }}>View</Link></li>
                        <li className="assignments-li"><Link to={{
                            pathname: "/view-submit-assignment", 
                            fileName: a.submit_pdf,
                            user
                        }}>View</Link></li>
                        <li className="assignments-li">{a.grade}</li>
                    </ul>
                )) : null}
            </div>
        </div>
    )
}

export default Submit_Assignments
