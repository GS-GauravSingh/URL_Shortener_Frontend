import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard, RecentUrl, Signin, Signup, Urls, Verify } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/authService";

function index() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// fetching user details once on component mount.
	useEffect(() => {
		dispatch(getMe(navigate));
	}, []);

	return (
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
		</Routes>
	);
}

export default index;
