import React, { useState, useEffect } from 'react';

const UserList = ({ onEdit, onDelete }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => onEdit(user)}>Edit</button>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
