export default (state, action) => {
    switch (action.type) {
        case "SET_TOKEN":
        localStorage.setItem("token", action.payload.token);
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            token: action.payload.token,
        };
        case "USER_LOADED":
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: action.payload,
        };

        case "AUTH_ERROR":
        return {
            ...state,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: action.payload,
        };

        case "LOGOUT":
        localStorage.removeItem("token");
        return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: action.payload,
        };

        default:
        break;
    }
}