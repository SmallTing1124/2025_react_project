import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: !!token,
        role: user ? JSON.parse(user).role : "guest",
        user: user ? JSON.parse(user) : null,
        token: token || null,
    },
    reducers: {
        loginSuccess(state, action) {
            state.isAuth = true;
            state.token = action?.payload?.token;
            state.user = action?.payload?.user;
            state.role = action?.payload?.role;

            
            localStorage.setItem("token", action?.payload?.token);
            localStorage.setItem("user", JSON.stringify(action?.payload?.user));

        },
        logout(state) {
            
            state.isAuth = false;
            state.role = "guest";
            state.token = null;
            state.user = null;
            
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        updateUser(state, action) {
            state.user = { ...state.user, ...action.payload };
            localStorage.setItem("user", JSON.stringify(state.user));
        },
    }
})

export const { loginSuccess, logout,updateUser } = authSlice.actions;
export default authSlice.reducer;