import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import './Add_Assignments.css';

function Add_Assignments() {
    const history = useHistory();
    const [fileName, setFile] = useState();

    function addAssignment(e) {
        e.preventDefault();
        let data = {
            title: e.target.title.value,
            deadline: e.target.deadline.value
        }
        data = JSON.stringify(data);
        const fd = new FormData();
        fd.append("file", fileName);
        fd.set("data", data);
        axios.post('http://localhost:9000/add-assignments', fd);
        let path = "/teacher"; 
        history.push(path);        
    }
    function fileUp(e) {
        setFile(e.target.files[0]);
    }
    return ( 
        <div>
            <h2 className="up-assignments-heading">Add-Assignment</h2>
            <form onSubmit={addAssignment} className="add-assignment-form">
                <input type="text" name="title" placeholder="Assignment-Title" className="assignment-title" autoComplete="off"/>
                <input type="file" name="file" onChange={fileUp} className="assignment-title"/>
                <div className="deadline">
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" name="deadline" id="deadline" />
                </div>
                <input type="submit" value="Add" className="add-btn"/>    
            </form>
        </div>
    )
}

export default Add_Assignments;
