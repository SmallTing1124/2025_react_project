import { createSlice } from "@reduxjs/toolkit";

// 讀取 localStorage
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
            // 更新 Redux 狀態
            state.isAuth = true;
            state.token = action?.payload?.token;
            state.user = action?.payload?.user;
            state.role = action?.payload?.role;

            // 同步更新 localStorage
            localStorage.setItem("token", action?.payload?.token);
            localStorage.setItem("user", JSON.stringify(action?.payload?.user));

        },
        logout(state) {
            // 更新 Redux 狀態
            state.isAuth = false;
            state.role = "guest";
            state.token = null;
            state.user = null;

            // 清除 localStorage 中的資料
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        updateUser(state, action) {
            // 更新 Redux state
            state.user = { ...state.user, ...action.payload };
            // 更新 localStorage
            localStorage.setItem("user", JSON.stringify(state.user));
        },
    }
})

export const { loginSuccess, logout,updateUser } = authSlice.actions;
export default authSlice.reducer;