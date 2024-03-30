const login = (data) => {
    return {
        type: 'LOGIN',
        user: data
    }
}

const logout = (data) => {
    return {
        type: 'LOGOUT',
    }
}

export {
    login,
    logout,
}
