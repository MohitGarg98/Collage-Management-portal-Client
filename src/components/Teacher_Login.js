import React from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Teacher_Login() {
    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        const teacher = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post('http://localhost:9000/teacher-login', teacher, {withCredentials: true})
        .then((response) => {
            if(response.data){
                let path = "/teacher"; 
                history.go(path);
            }else{
                let path = `/`; 
                history.go(path);
            }
        })
        .catch(err => {
            console.error(err);
        }); 
    }
    return (
        <div>
            <div className="center-div">
                <form onSubmit={handleSubmit} encType="multipart/form-data" name="form" id="form" >
                    <h3>Teacher Login</h3>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control input-box" id="exampleInputId" aria-describedby="emailHelp" placeholder="Enter Your Email" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control input-box" id="exampleInputPassword" placeholder="Enter Your Password" />
                    </div>
                    <input type="submit" className="custom-btn" value="Login" id="submitButton" />
                    <h6 id="sign">New User ? <a href="/teacher-register">Sign Up</a></h6> 
                </form>
            </div>
        </div>
    )
}

export default Teacher_Login;
