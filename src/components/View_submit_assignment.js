import React, { useEffect } from 'react'; 
import axios from "axios";
import PdfFile from "./PDF_File";
import './View_Submit_Assignment.css';

function View_assignment(props) {    
    const fileName = props.location.fileName;
    const user = props.location.user;

    useEffect(() => {
        document.body.style.backgroundImage = "none"; 
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
    });

    function submitGrade(e) {
        e.preventDefault();
        let data = {
            grade: e.target.grade.value,
            fileName: fileName
        }
        axios.post('http://localhost:9000/submit-grade', data);
        window.location.href = "/teacher";        
    }

    return ( 
        <div className="view-assignment-container"> 
            <PdfFile fileName={fileName} />
            {user === "teacher" && props.location.file !== "assignment" ?
            <div className="submit-assignment-form">
                <form onSubmit={submitGrade}>
                    <input type="text" name="grade" className="grade-input" placeholder="Enter Grade"/><input type="submit" value="Submit" className="submit-grade-btn"/>  
                </form>
            </div> : null}
        </div> 
    ); 
}

export default View_assignment;