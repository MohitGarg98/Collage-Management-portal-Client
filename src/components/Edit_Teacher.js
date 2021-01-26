import React from 'react';
import EditUser from "./Edit_User";
import Cookies from 'universal-cookie';

function Edit_Teacher() {
    const cookies = new Cookies();
    const teacher = cookies.get('teacher');
    return (
        <div>
            <EditUser userId={teacher} user="teacher"/>
        </div>
    )
}

export default Edit_Teacher
