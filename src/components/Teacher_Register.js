import React from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

function Teacher_Register() {
    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        let path = "/teacher"; 
        history.push(path);
        const teacher = {
            email: e.target.email.value,
            password: e.target.password.value,
            name: e.target.name.value,
        }
        axios.post('http://localhost:9000/create-teacher', teacher);
    }
    return (
        <div>
            <div className="center-div">
                <form name="form" id="form" onSubmit={handleSubmit}>
                    <h3>Teacher Registeration</h3>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control input-box" id="exampleInputName1" placeholder="Enter Your Name" autoComplete="off" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control input-box" id="exampleInputId" placeholder="Enter Your Email" autoComplete="off" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control input-box" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="cpassword" className="form-control input-box" id="exampleInputCPassword1" placeholder="Confirm Password" required/>
                    </div>
                    <input type="submit" className="custom-btn" value="Register" />
                    <h6 id="sign">Already have an account? <a href="/teacher-login">Sign in</a></h6>
                </form>
            </div>
        </div>
    )
}

export default Teacher_Register;
