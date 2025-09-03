// --- MOCKED API for Frontend-Only Demo Mode ---

const register = (username, email, password) => {
    console.log("DEMO MODE: Mock Register call with:", { username, email, password });
    // Simulate a successful registration immediately
    return Promise.resolve();
};

const login = (username, password) => {
    console.log("DEMO MODE: Mock Login call with:", { username, password });
    // Simulate a successful login for any user
    if (username && password) {
        const mockUser = {
            token: 'fake-jwt-token-for-demo-mode',
            username: username,
        };
        // Store the fake user session in local storage, just like the real service would
        localStorage.setItem('user', JSON.stringify(mockUser));
        return Promise.resolve(mockUser);
    } else {
        // Simulate a login failure
        return Promise.reject('Login failed: In demo mode, username and password are required.');
    }
};

const logout = () => {
    // The logout function is the same, it just clears local storage
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    // This function is also the same
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
