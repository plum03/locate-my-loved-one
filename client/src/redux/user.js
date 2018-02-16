import axios from 'axios';
import {login} from '../redux/authorization'


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config
})

const url = "/user/"

// verifyUser is used for authentication, please do not change
export function verifyUser () {
    return (dispatch) => {
        axios.get(url + "verify")
        .then((response) => {
            let {success, user } = response.data
            dispatch(login(user, success))
        })
        .catch ((err) => {
            console.error(err)
        })
    } 
}

// User ACTIONS go here

// User REDUCER go here