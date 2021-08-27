import React from 'react'
import { TodoForm } from './TodoForm';
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
            <h3>Create Todo Item</h3>
            <TodoForm onSubmit={onSubmit}/>
        </div>
    </div>
    );
};