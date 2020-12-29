import React from 'react'
import "./Student.css";

function Student() {
    return (
        <div>
            <div className="assignments-container">
                <a className="assignments”-link" href="/upcoming-assignments">Upcoming Assignments</a>
                <a className="assignments”-link" href="/submitted-assignments">Submitted Assignments</a>
            </div>
        </div>
    )
}

export default Student
