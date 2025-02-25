import React, { useState } from "react";
import signinSVG from "../../assets/signin.svg";
import { EnvelopeSimple, Eye, EyeClosed, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Signin() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

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

					<form className="flex flex-col justify-center w-full space-y-2">
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
							<button onClick={() =>  navigate("/auth/signup")} className="text-primary underline underline-offset-4 cursor-pointer font-medium">
								Sign Up
							</button>
						</p>

						<button
							type="submit"
							className="bg-secondary rounded-md text-white h-10 text-sm cursor-pointer"
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
