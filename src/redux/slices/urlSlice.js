import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recent: {}, // Stores the most recently generated short URL
	urls: [], // Stores all shortened links created by the user
	loading: false, // Indicates if URL fetching is in progress
	error: null, // Stores error message, if any occurs while fetching URLs
};

const urlSlice = createSlice({
	name: "url",
	initialState,
	reducers: {
		setError: function (state, action) {
			state.error = action.payload;
		},

		setLoading: function (state, action) {
			state.loading = action.payload;
		},

		setRecent: function (state, action) {
			state.recent = action.payload
		},

		setUrls: function (state, action) {
			// `Array.isArray()` checks if the passed value is an Array or not. If yes, then it return true, otherwise it returns false.
			state.urls = Array.isArray(action.payload) ? action.payload : [];
		},

		resetUrls: function (state, actions) {
			// The Object.assign() method copies properties from one or more source objects to a target object.
			// Syntax: Object.assign(target, source(s))
			Object.assign(state, initialState);
		},
	},
});

export const { setError, setLoading, setRecent, setUrls, resetUrls } =
	urlSlice.actions;
export default urlSlice.reducer;
