import React, { useState } from "react";
import signupSVG from "../../assets/signup.svg";
import { EnvelopeSimple, User } from "@phosphor-icons/react";
import { LockSimple } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader, FadeLoader } from "react-spinners";

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.auth);

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event) {
		// prevent the default action of submit button.
		event.preventDefault();

		dispatch(
			registerUser({ firstname, lastname, email, password }, navigate)
		);
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
						onSubmit={handleSubmit}
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
									required
									autoFocus
									placeholder="Enter first name"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									onChange={(event) =>
										setFirstname(event.target.value)
									}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<User size={20} weight="regular" />
								</span>
							</div>
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
									required
									placeholder="Enter last name"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									onChange={(event) =>
										setLastname(event.target.value)
									}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<User size={20} weight="regular" />
								</span>
							</div>
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
									required
									placeholder="Enter email"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									onChange={(event) =>
										setEmail(event.target.value)
									}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<EnvelopeSimple
										size={20}
										weight="regular"
									/>
								</span>
							</div>
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
									required
									placeholder="Create a new password (6+ characters long)"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									onChange={(event) =>
										setPassword(event.target.value)
									}
								/>
								<span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary">
									<LockSimple size={20} weight="regular" />
								</span>
							</div>
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
