import axios from "axios"

export default function searchReducer(searchResults = { data: [], loading: true }, action) {
    switch (action.type) {
        case "GET_USERS":
            return {
                data: action.data,
                loading: false
            }
        default:
            return searchResults
    }
}

export function getUsers() {
    return (dispatch) => {
        axios.get("/user")
            .then(response => {
                let { users } = response.data;
                dispatch({
                    type: "GET_USERS",
                    data: users
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}