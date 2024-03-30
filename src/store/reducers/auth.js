export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            if (action.data) {
                state = {
                    isLogin: true,
                    token: action.data.token,
                    userName: action.data.userName,
                    avatar: action.data.avatar,
                    email: action.data.email,
                }
            }
            return state;
        case "LOGOUT":
            state = {
                isLogin: false,
                token: "",
                userName: "",
                avatar: "",
                email: "",
            }
            return state;
        default:
            return state;
    }
};

export default authReducer