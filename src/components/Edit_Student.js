import React from 'react';
import EditUser from "./Edit_User";
import Cookies from 'universal-cookie';

function Edit_Student() {
    const cookies = new Cookies();
    const student = cookies.get('student');
    return (
        <div>
            <EditUser userId={student} user="student"/>
        </div>
    )
}

export default Edit_Student
