import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function me(){
const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
     return fetch(`${config.apiUrl}/api/me/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, email })
    };

    return fetch(`${config.apiUrl}/api/auth/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', user.auth_token);

            return me();
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/users/`, requestOptions).then(handleResponse);
}



function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}api/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/api/users/`, requestOptions).then(handleResponse).then(console.log("prueba"));
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}api/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}api/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
