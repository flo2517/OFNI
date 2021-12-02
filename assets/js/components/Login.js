import React, {Component, useContext, useState} from 'react';
import authAPI from "../services/authAPI";
import AuthContext from "../contexts/authContext";
import {useNavigate} from "react-router-dom";

function Login () {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const {setIsAuthenticated} = useContext(AuthContext);

    const handleChange = ({currentTarget}) => {
        setCredentials({
            ...credentials,
            [currentTarget.name]: currentTarget.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authAPI.login(credentials);
            setIsAuthenticated(true)
            navigate(-1);
        }catch (e) {
            console.log(e.response);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" placeholder="Password" name="password" onChange={handleChange}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;