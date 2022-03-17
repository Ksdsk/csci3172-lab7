
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function User(props) {
    return (
        <div className='p-5'>
            <h1 className="text-center pb-5">🦆Profile Page🦆</h1>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Favourite Season: {props.season}</p>
            <Link to="/dashboard">Go to your Dashboard</Link>
        </div>
    )
}

export default User;
