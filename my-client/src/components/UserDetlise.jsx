import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetlise = () => {
    const user = useLoaderData();
    console.log(user)
    // const navigei = useNavigate();
    return (
        <div>
            <h2>User Detlise Pages Now</h2>
            <p>Name : {user.name}</p>
            <h2>Email : {user.email}</h2>
        </div>
    );
};

export default UserDetlise;