const API_URL = '/api/users/';

const register = (username, email, password) => {
    return fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
};

const login = (username, password) => {
    return fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then(response => {
        if (response.ok) {
            return response.json().then(data => {
                if (data.token) {
                    localStorage.setItem('user', JSON.stringify(data));
                }
                return data;
            });
        } else {
            return Promise.reject('Login failed');
        }
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
