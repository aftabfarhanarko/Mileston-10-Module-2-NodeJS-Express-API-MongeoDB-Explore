import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetlise = () => {
    const userPromise = useLoaderData();
    console.log(userPromise);
    return (
        <div>
           <h1>Name : {userPromise.name}</h1>
           <p>Email : {userPromise.email}</p>
        </div>
    );
};

export default UserDetlise;