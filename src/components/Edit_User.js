import React from 'react';
import axios from "axios";

import "./Edit_User.css";

function Edit_User(props) {
    const userId = props.userId;
    const user = props.user;    

    function changeName(e){
        e.preventDefault();
        axios.post(`http://localhost:9000/edit-${user}`, {name: e.target.name.value, userId, user}, {withCredentials: true})
        .then((response) => {            
            if(user === "student"){
                window.location.href = "/student";
            }else{
                window.location.href = "/teacher";
            }
        })
        .catch(err => {
            console.error(err);
        }); 
    }

    function changePassword(e){
        e.preventDefault(); 
        axios.post(`http://localhost:9000/edit-${user}`, {password: e.target.password.value}, {withCredentials: true})
        .then((response) => {
            if(user === "student"){
                window.location.href = "/student";
            }else{
                window.location.href = "/teacher";
            }
        })
        .catch(err => {
            console.error(err);
        }); 
    }

    return (
        <div>
            <h2 className="edit-heading">Edit Profile</h2>
            <div className="edit-user-profile">
                <form onSubmit={changeName} className="change-name-form">
                    <h4>Change Name</h4>
                    <label htmlFor="change-name">Name</label>
                    <input name="name" type="text" id="change-name" className="input-field"/>
                    <input type="submit" value="Change Name" className="change-name-btn"/>
                </form>
                <form onSubmit={changePassword} className="change-password-form">
                    <h4>Change Password</h4>
                    <label htmlFor="change-password">Password</label>
                    <input name="password" type="password" id="change-password" className="input-field"/>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input name="confirm_password" type="password" id="confirm-password" className="input-field"/>
                    <input type="submit" value="Change Name" className="change-name-btn"/>
                </form>
            </div>
        </div>
    )
}

export default Edit_User;
