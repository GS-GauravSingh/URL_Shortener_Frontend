import { toast } from "react-toastify";
import axiosInstance from "../axios/axiosInstance";
import {
	setError,
	setLoading,
	setRecent,
	setUrls,
} from "../redux/slices/urlSlice";

// Shorten URL
export function shortenURL({ url }, navigate) {
	return async (dispatch, getState) => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));

			// API Call
			const response = await axiosInstance.post(
				"/api/v1/url/shorten",
				{ url },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("authToken") ? localStorage.getItem("authToken") : ""}`,
					},
				}
			);

			// console.log(response);
			const { message, shortenUrl, originalUrl } = response.data;
			toast.success(message || "URL shortened successfully!");
			dispatch(setRecent({ shortenUrl, originalUrl }));
		} catch (error) {
			// console.log(
			// 	"Error: shortenURL: An error encountered during url shortening process.",
			// 	error
			// );
			dispatch(setError(error));
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong!!"
			);
		} finally {
			dispatch(setLoading(false));

			if (!getState().url.error) {
				setTimeout(() => {
					navigate("/user/url");
				}, 2000);
			}
		}
	};
}

// Fetch All URLs
export function fetchAllUrls() {
	return async (dispatch, getState) => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));

			// API Call
			const response = await axiosInstance.get("/api/v1/url/urls", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("authToken") ? localStorage.getItem("authToken") : ""}`,
				},
			});

			const { message, urls } = response.data;
			toast.success(message);
			dispatch(setUrls(urls));
		} catch (error) {
			// console.log(
			// 	"Error: fetchAllUrls: An error encountered while fetching all URLs.",
			// 	error
			// );
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

// Fetch most recently generate URL
export function fetchRecentUrl() {
	return async (dispatch, getState) => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));

			// API Call
			const response = await axiosInstance.get("/api/v1/url/recent", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("authToken") ? localStorage.getItem("authToken") : ""}`,
				},
			});

			// console.log(response);
			const { message, recentUrl } = response.data;
			toast.success(message);
			dispatch(setRecent(recentUrl[0]));
		} catch (error) {
			// console.log(
			// 	"Error: fetchRecentUrl: An error encountered while fetching most recently generated URL.",
			// 	error
			// );
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
