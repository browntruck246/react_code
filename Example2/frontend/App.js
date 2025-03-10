import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
    const [users, setUsers] = useState([]);

    const handleSave = (user) => {
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => fetchUsers());
    };

    const handleEdit = (user) => {
        fetch(`/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => fetchUsers());
    };

    const handleDelete = (id) => {
        fetch(`/users/${id}`, { method: 'DELETE' }).then(() => fetchUsers());
    };

    const fetchUsers = () => {
        fetch('/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    };

    return (
        <div>
            <h1>CRUD App</h1>
            <UserForm onSave={handleSave} />
            <UserList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
