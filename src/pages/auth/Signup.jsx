import React, { useState } from "react";
import signupSVG from "../../assets/signup.svg";
import { EnvelopeSimple, User } from "@phosphor-icons/react";
import { LockSimple } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader, FadeLoader } from "react-spinners";
import { useForm } from "react-hook-form";

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.auth);

	const {
		register, // `register` is a function provided by the `useForm` hook. We can assign it to each input field so that the react-hook-form can track the changes for the input field value
		handleSubmit, // `handleSubmit` is the function we can call when the form is submitted
		formState: { errors }, // the `formState` object contains various properties that help track the form's state. It provides details about errors, touched fields, dirty fields, submission status, etc.
		reset, // reset() is a function provided by the useForm() hook to clear the form fields and reset errors to their default state.
	} = useForm();

	async function onSubmit(data) {
		console.log(data);

		try {
			await dispatch(registerUser(data));
			navigate("/auth/verify");
		} catch (error) {
		} finally {
			reset(); // reset the form fields
		}
	}

	return (
		<div className="h-screen px-4">
			{/* Main Container - Contains actual content */}
			<div className="h-full grid place-content-center grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4">
				{/* Sign Up SVG */}
				<div className="hidden lg:flex items-center justify-center">
					<img
						src={signupSVG}
						alt="Sign Up Illustration SVG"
						className="w-full h-full object-center object-contain"
					/>
				</div>

				{/* Sign Up Form */}
				<div className="h-full flex flex-col justify-center items-start pr-4 space-y-4">
					<div className="flex flex-col mb-8">
						<h3 className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold">
							URL Shortener
						</h3>
						<p className="text-xs md:text-sm">
							Shorten, Share, and Track.
						</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col justify-center w-full space-y-2"
					>
						{/* First name */}
						<div className="group">
							<label
								htmlFor="userFirstName"
								className="text-primary"
							>
								First name
							</label>

							<div className="relative">
								<input
									type="text"
									id="userFirstName"
									name="firstname"
									autoFocus
									placeholder="Enter first name"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									{...register("firstname", {
										required: "Firstname is required!",
										pattern: {
											value: /^[A-Za-z]+$/, // Only alphabets allowed
											message:
												"Firstname should only contain letters (A-Z, a-z).", // Custom error message
										},
									})}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<User size={20} weight="regular" />
								</span>
							</div>
							{/* Display error message if 'firstname' has an error */}
							{errors.firstname && (
								<p className="text-xs text-red-700 my-[2px]">
									{errors.firstname.message}
								</p>
							)}
						</div>

						{/* Last name */}
						<div className="group">
							<label
								htmlFor="userLastName"
								className="text-primary"
							>
								Last name
							</label>

							<div className="relative">
								<input
									type="text"
									id="userLastName"
									placeholder="Enter last name"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									{...register("lastname", {
										required: "Lastname is required!",
										pattern: {
											value: /^[A-Za-z]+$/, // Only alphabets allowed
											message:
												"Lastname should only contain letters (A-Z, a-z).", // Custom error message
										},
									})}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<User size={20} weight="regular" />
								</span>
							</div>
							{/* Display error message if 'lastname' has an error */}
							{errors.lastname && (
								<p className="text-xs text-red-700 my-[2px]">
									{errors.lastname.message}
								</p>
							)}
						</div>

						{/* Email */}
						<div className="group">
							<label htmlFor="userEmail" className="text-primary">
								Email
							</label>

							<div className="relative">
								<input
									type="email"
									id="userEmail"
									placeholder="Enter email"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									{...register("email", {
										required: "Email is required!",
										pattern: {
											value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
											message:
												"Enter a valid email address.", // Custom error message
										},
									})}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<EnvelopeSimple
										size={20}
										weight="regular"
									/>
								</span>
							</div>
							{/* Display error message if 'email' has an error */}
							{errors.email && (
								<p className="text-xs text-red-700 my-[2px]">
									{errors.email.message}
								</p>
							)}
						</div>

						{/* Password */}
						<div className="group">
							<label
								htmlFor="userPassword"
								className="text-primary"
							>
								Password
							</label>

							<div className="relative">
								<input
									type="password"
									id="userPassword"
									placeholder="Create a new password (6+ characters long)"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									{...register("password", {
										required: "Password is required!",
										minLength: {
											value: 6,
											message:
												"Password must be at least 6 characters long.",
										},
									})}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<LockSimple size={20} weight="regular" />
								</span>
							</div>
							{/* Display error message if 'password' has an error */}
							{errors.password && (
								<p className="text-xs text-red-700 my-[2px]">
									{errors.password.message}
								</p>
							)}
						</div>

						<p className="text-xs text-center my-4">
							Already a member?&nbsp;
							<button
								onClick={() => navigate("/auth/signin")}
								className="text-primary font-medium cursor-pointer disabled:cursor-no-drop"
								disabled={loading}
							>
								Sign In
							</button>
						</p>

						<button
							type="submit"
							className="bg-secondary rounded-md text-white h-10 text-sm cursor-pointer flex items-center justify-center disabled:cursor-no-drop"
							disabled={loading}
						>
							{loading ? (
								<PropagateLoader
									color="white"
									aria-label="Loading Spinner"
									size={7}
								/>
							) : (
								"Register"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;
