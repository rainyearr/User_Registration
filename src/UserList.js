import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "./api";
import "./UserList.css"

export const UserList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const todos = await getTodos()
            setItems(todos)
        }
        fetchItems()
    }, [])

    return ( 
    <div className="list-container">
        <div className="mt-3">
            <h3>User List Table</h3>
            <table className = "table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(todo => (
                            <tr key={todo._id}>
                                <td>
                                    {todo.fullname}
                                </td>
                                <td>
                                    {todo.username}
                                </td>
                                <td>
                                    {todo.email}
                                </td>
                                <td>
                                    {todo.address}
                                </td>
                                <td>
                                    {todo.phonenumber}
                                </td>
                                
                                <td>
                                    <button className="update-button">
                                        <Link style={{
                                            color: "inherit",
                                            textDecoration: "inherit",}}
                                            to={`/edit/${todo._id}`}>Edit</Link>
                                    </button>
                                    <button className="del-button">
                                        <Link style={{
                                            color: "inherit",
                                            textDecoration: "inherit",}}
                                            to={`/delete/${todo._id}`}>Delete</Link>
                                    </button>
                                    
                                </td>
                            </tr>  
                        )) 
                    }
                </tbody>
            </table>
        </div>
    </div>
    
)}