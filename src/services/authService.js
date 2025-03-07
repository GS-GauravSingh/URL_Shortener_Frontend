import { toast } from "react-toastify";
import axiosInstance from "../axios/axiosInstance";
import {
	authenticationSuccess,
	setError,
	setLoading,
} from "../redux/slices/authSlice";

// By default, Redux does not allow asynchronous tasks inside action creators, as they must return plain JavaScript objects. However, with the help of Redux Thunk middleware, action creators can return a function instead of an object. This function receives dispatch and getState as arguments, enabling the execution of asynchronous tasks like API calls before updating the Redux store.

// Below are the asynchronous Redux Thunk action creators.

// Register User
export function registerUser(formData) {
	const { firstname, lastname, email, password } = formData;

	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store.

		try {
			dispatch(setError(null));
			dispatch(setLoading(true));

			const userCredentails = {
				firstname,
				lastname,
				email,
				password,
			};

			// API Call
			const response = await axiosInstance.post(
				"/api/v1/auth/signup",
				userCredentails
			);
			toast.success(response.data.message);

			// Store the user email in the session storage, it helps in OTP verification.
			sessionStorage.setItem("userEmail", email);

			// return a successfull response
			return response.data;
		} catch (error) {
			dispatch(setError(error));
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong!!"
			);

			// return a rejected promise
			return Promise.reject(error);
		} finally {
			dispatch(setLoading(false));
		}
	};
}

// Verify OTP
export function verifyOTP({ email, otp }, navigate) {
	return async (dispatch, getState) => {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));

			const userCredentails = {
				email,
				otp,
			};

			// API Call
			const response = await axiosInstance.post(
				"/api/v1/auth/verify-otp",
				userCredentails
			);

			const { token, message, user } = response.data;
			dispatch(authenticationSuccess({ user }));
			localStorage.setItem("authToken", token); // store token in the local storage
			toast.success(message || "Email Verified Successfully!");
		} catch (error) {
			dispatch(setError(error));
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong!!"
			);
		} finally {
			dispatch(setLoading(false));

			if (!getState().auth.error) {
				// In `getState().auth`, auth is the slice name.
				navigate("/dashboard");

				// Delete the user email from the session storage once the OTP is verified.
				sessionStorage.removeItem("userEmail");
			}
		}
	};
}

// Resend OTP
export function resendOTP({ email }) {
	return async (dispatch, getState) => {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));

			const userCredentails = {
				email,
			};

			// API Call
			const response = await axiosInstance.post(
				"/api/v1/auth/resend-otp",
				userCredentails
			);
			toast.success(response.data.message);
		} catch (error) {
			dispatch(setError(error));
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong!!"
			);
		} finally {
			dispatch(setLoading(false));
		}
	};
}

// Login User
export function loginUser(formData) {
	const { email, password } = formData;
	return async (dispatch, getState) => {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));

			const userCredentails = {
				email,
				password,
			};

			// API Call
			const response = await axiosInstance.post(
				"/api/v1/auth/login",
				userCredentails
			);

			const { token, message, user } = response.data;
			localStorage.setItem("authToken", token); // store token in the local storage
			toast.success(message || "Logged in successfully!");
			dispatch(authenticationSuccess({ user }));

			// return a successfull response
			return response.data;
		} catch (error) {
			dispatch(setError(error));
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong!!"
			);

			// return a rejected promise
			return Promise.reject(error);
		} finally {
			dispatch(setLoading(false));
		}
	};
}

// Get Me - Get the current user details.
export function getMe(navigate) {
	return async (dispatch, getState) => {
		try {
			dispatch(setError(null));
			dispatch(setLoading(true));

			// API Call
			const response = await axiosInstance.get("/api/v1/user/get-me", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("authToken") ? localStorage.getItem("authToken") : ""}`,
				},
			});

			const { message, user } = response.data;
			dispatch(authenticationSuccess({ user }));
			toast.success(message || "Logged in successfully!");
		} catch (error) {
			dispatch(setError(error));
			toast.error(
				error?.status === 401
					? "Unauthorized User, Please log in."
					: "Something went wrong!!"
			);
		} finally {
			dispatch(setLoading(false));

			if (!getState().auth.error) {
				// In `getState().auth`, auth is the slice name.
				// navigate("/dashboard");
			} else {
				setTimeout(() => {
					navigate("/auth/signin");
				}, 2000);
			}
		}
	};
}
