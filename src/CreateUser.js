import React from 'react'
import { UserForm } from './UserForm';
import { createUser } from './api';
import { useHistory } from 'react-router-dom';


export const CreateUser = () => {

    const history = useHistory()
    
    const onSubmit = async(data) => {
        await createUser(data)
        history.push ("/")
    };

return(
    <div className="container">
        <div className = "mt-3">
            <h3>Create User</h3>
            <UserForm onSubmit={onSubmit}/>
        </div>
    </div>
    );
};