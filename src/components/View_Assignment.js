import React, { useState, useEffect} from 'react'; 
import axios from "axios";
import {useDispatch} from "react-redux";
import { submitAssignmentAct } from '../actions';
import PdfFile from "./PDF_File";
import './View_Assignment.css'

function View_assignment(props) {    
    const dispatch = useDispatch();
    const [submitFileName, setSubmitFile] = useState();
    const fileName = props.location.param1.pdf;
    const assignmentTitle = props.location.param1.title;

    useEffect(() => {
        document.body.style.backgroundImage = "none"; 
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
    });

    function fileUp(e) {
        setSubmitFile(e.target.files[0]);
    }
    
    function submitAssignment(e) {
        let data = {
            assignmentTitle: assignmentTitle,
            fileName: fileName
        }
        data = JSON.stringify(data);
        e.preventDefault();
        const fd = new FormData();
        fd.append("file", submitFileName);
        fd.set("data", data);

        axios
        .post('http://localhost:9000/submit-assignments', fd)
        .then((response) => {
            dispatch(submitAssignmentAct(response.data));
        })
        .catch(err => {
            console.error(err);
        }); 
        window.location.href = "/student";     
    }

    return ( 
        <div className="view-assignment-container"> 
            <PdfFile fileName={fileName} />
            <div className="submit-assignment-form">
                <form onSubmit={submitAssignment}>
                    <h2>Submit Assignment</h2>
                    <input type="file" onChange={fileUp} name="file" className="file"/>
                    <input type="submit" value="Submit" className="submit-assignment-btn"/>    
                </form>
            </div>
        </div> 
    ); 
}

export default View_assignment;