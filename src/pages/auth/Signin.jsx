import React, { useState } from "react";
import signinSVG from "../../assets/signin.svg";
import { EnvelopeSimple, Eye, EyeClosed, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../services/authService";
import { PropagateLoader } from "react-spinners";

function Signin() {
	const [showPassword, setShowPassword] = useState(false);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.auth);

	function handleSubmit(event) {
		event.preventDefault();

		dispatch(loginUser({ email, password }, navigate));
	}

	return (
		<div className="h-screen px-4">
			{/* Main Container - Contains actual content */}
			<div className="h-full grid place-content-center grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4">
				{/* Sign In SVG */}
				<div className="hidden lg:flex items-center justify-center">
					<img
						src={signinSVG}
						alt="Sign In Illustration SVG"
						className="w-full h-full object-center object-contain"
					/>
				</div>

				{/* Sign In Form */}
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
									autoFocus
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
									type={showPassword ? "text" : "password"}
									id="userPassword"
									required
									placeholder="Enter password"
									className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
									onChange={(event) =>
										setPassword(event.target.value)
									}
								/>
								<span
									className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
									onClick={() =>
										setShowPassword((prev) => !prev)
									}
								>
									{showPassword ? (
										<Eye size={20} weight="regular" />
									) : (
										<EyeClosed size={20} weight="regular" />
									)}
								</span>
							</div>
						</div>

						<p className="text-xs text-center my-4">
							Don't have any account?&nbsp;
							<button
								onClick={() => navigate("/auth/signup")}
								className="text-primary cursor-pointer font-medium disabled:cursor-no-drop"
								disabled={loading}
							>
								{loading ? (
									<PropagateLoader
										color="white"
										aria-label="Loading Spinner"
										size={7}
									/>
								) : (
									"Sign Up"
								)}
							</button>
						</p>

						<button
							type="submit"
							className="bg-secondary rounded-md text-white h-10 text-sm cursor-pointer"
							disabled={loading}
						>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signin;
