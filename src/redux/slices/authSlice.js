import { createSlice } from "@reduxjs/toolkit";

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object.
const initialState = {
	user: null, // store user details
	loading: false, // Indicates whether the authentication process (such as login/signup) is happening.
	error: null, // stores error message, if any error encounter in authentication process.
	isAuthenticated: false, // tracks user login status
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
export const authSlice = createSlice({
	// `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
	name: "auth",

	initialState,

	/*
    `reducers` are simple javascript functions that are used to update the slice state.
    */
	reducers: {
		setError: function (state, action) {
			state.error = action.payload;
		},

		setLoading: function (state, action) {
			state.loading = action.payload;
		},

		authenticationSuccess: function (state, action) {
			state.user = action.payload.user;
			state.isAuthenticated = true;
		},

		logout: function (state, action) {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});

export const { setError, setLoading, authenticationSuccess, logout } =
	authSlice.actions;

export default authSlice.reducer;
