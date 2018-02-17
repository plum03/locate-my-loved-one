import axios from "axios"

axios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    })




export function signup(user) {
    return dispatch => {
        axios
            .post("/auth/signup", user)
            .then(response => {
                dispatch({ type: "SIGNUP", user: response.data })
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function login(user, success) {
    return dispatch => {
        axios
            .post("/auth/login", user)
            .then(response => {
                let { token, success, user } = response.data
                localStorage.setItem("token", token)
                dispatch({
                    type: "LOGIN",
                    user,
                    success
                })
            })
    }
}

export function logout(history) {
    localStorage.removeItem("token");
    // history.push("/");
    return { type: "LOGOUT" }
}


export function verifyUser() {
    return (dispatch) => {
        axios.get("/user/verify")
            .then((response) => {
                let { success, user } = response.data
                dispatch(login(user, success))
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

export default function authReducer(user = {
    loading: false,
    data: {},
    isAuthenticated: false
}, action) {
    switch (action) {
        case "LOGIN":
            return {
                data: {
                    ...action.user,
                    token: action.token
                },
                loading: false,
                isAuthenticated: action.success
            }
        case "LOGOUT":
            return {
                loading: false,
                data: {},
                isAuthenticated: false
            }

        default:
            return user
    }
}