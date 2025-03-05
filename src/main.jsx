import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* Toastify */}
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					stacked
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
				/>
				<AppRoutes />
			</Provider>
		</BrowserRouter>
	// </React.StrictMode>
);
