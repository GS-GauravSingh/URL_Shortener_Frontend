import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/auth/Signup";
import Signin from "../pages/auth/Signin";
import Verify from "../pages/auth/Verify";
import { Profile, RecentUrl, Urls } from "../pages";

function index() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Home/Root Route */}
				<Route index element={<Navigate to="/dashboard" />} />

				{/* Dashboard Route */}
				<Route path="/dashboard" element={<Dashboard />} />

				{/* Authentication Routes */}
				<Route path="/auth/signup" element={<Signup />} />
				<Route path="/auth/verify" element={<Verify />} />
				<Route path="/auth/signin" element={<Signin />} />

				{/* User Router */}
				<Route path="/user/url" element={<RecentUrl />} />
				<Route path="/user/urls" element={<Urls />} />
				{/* <Route path="/user/profile" element={<Profile />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default index;
