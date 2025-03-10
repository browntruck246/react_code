import React, { useState } from 'react';
import axios from 'axios';

function CreateComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, email };
    await axios.post('/users', user);
    // Redirect or update UI
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateComponent;
