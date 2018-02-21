import axios from "axios"
const userAxios = axios.create();
userAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    });

function authorize(user, success) {
    return {
        type: "AUTHORIZE",
        user,
        success
    }
}

export function signup(user, history) {
    return dispatch => {
        axios
            .post("/auth/signup", user)
            .then(response => {
                let { newUser, success, token } = response.data;
                localStorage.setItem("token", token);
                dispatch(authorize(newUser, success));
                history.push("/profile");
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function login(user, history) {
    return dispatch => {
        axios
            .post("/auth/login", user)
            .then(response => {
                let { token, success, user } = response.data
                localStorage.setItem("token", token);
                dispatch(authorize(user, success));
                history.push("/profile");
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export function logout(history) {
    localStorage.removeItem("token");
    // history.push("/");
    return { type: "LOGOUT" }
}

export function editUser(editedUser, id) {
    return (dispatch) => {
        userAxios.put("/user/edit", editedUser)
            .then((response) => {
                dispatch({
                    type: "EDIT_USER",
                    editedUser: response.data,
                    id
                })
            })
            .catch((err) => {
                console.error(err)
                dispatch(authorize({}, false))
            })
    }
}


export function verifyUser() {
    return (dispatch) => {
        userAxios.get("/user/verify")
            .then((response) => {
                let { success, user } = response.data
                dispatch(authorize(user, success));
            })
            .catch((err) => {
                console.error(err)
                dispatch(authorize({}, false));
            })
    }
}

export function deleteUser() {
    return (dispatch) => {
        userAxios
        .delete("user/delete")
        .then((response) => {
            localStorage.removeItem("token");
            dispatch({
                type: "DELETE_USER"
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export default function authReducer(user = {
    loading: true,
    data: {},
    isAuthenticated: false
}, action) {
    switch (action.type) {
        case "AUTHORIZE":
            return {
                data: {
                    ...action.user
                    
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
        case "EDIT_USER":
            return {
                data: action.editedUser,
                loading: false,
                isAuthenticated: true
            }
        case "DELETE_USER":
            return {
                data: {},
                loading: false,
                isAuthenticated: false
            }
        default:
            return user
    }
}
