import {URL_LOGIN} from "../config";
import axios from "axios";
import jwtDecode from "jwt-decode";

function login(credentials) {
    return axios.post(URL_LOGIN, credentials)
        .then(response => {
            return response.data;
        })
        .then(data =>{
            localStorage.setItem('token', data.token);
            axios.defaults.headers.common['Authorization'] = data.token;
        })
        .catch(error => {
            return error.response.data;
        });
}

function isAuthenticated() {
    const token = localStorage.getItem('token');
    if(token){
        const {exp} = jwtDecode(token);
        return exp >= Date.now() / 1000;
    }
}

export default {
    login,
    isAuthenticated
};