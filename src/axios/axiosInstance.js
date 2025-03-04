import axios from "axios";

//  `Axios.create()` is a handy feature within Axios used to create a new instance of Axios with a custom configuration.
const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_BASE_URL, // Set backend base URL
	withCredentials: true, // Allows cookies to be sent with the API request (usefull for authentication process)
	headers: {
		"Content-Type": "application/json", // Default content type
	},
});

// Axios interceptors are similar to middlewares in Express.js. Both allow you to modify or handle requests and responses before they reach their final destination.
axiosInstance.interceptors.response.use(
	(response) => response, // Return response if successful
	(error) => Promise.reject(error)
);

export default axiosInstance;
