import React, { useEffect, useRef, useState } from "react";
import otpVerifySVG from "../../assets/otpVerification.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resendOTP, verifyOTP } from "../../services/authService";
import { PropagateLoader } from "react-spinners";

function Verify() {
	const otpInputRef = useRef([]);
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const [timeLeft, setTimeLeft] = useState(2 * 60); // 2 minutes in second.
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	const [showResendOTPButton, setShowResendOTPButton] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.auth);

	useEffect(() => {
		// console.log(otpInputRef);
		if (otpInputRef.current[0]) {
			otpInputRef.current[0].focus();
		}
	}, []);

	useEffect(() => {
		if (timeLeft <= 0) {
			setShowResendOTPButton(true);
			return;
		}

		const intervalId = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft]);

	function handleOnChange(event, index) {
		const value = event.target.value;
		if (isNaN(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		if (value && index < otpInputRef.current.length - 1) {
			// move focus to next input field.
			otpInputRef.current[index + 1].focus();
		}

		// combined OTP
		const combinedOtp = newOtp.join("");
		if (combinedOtp.length === 4) {
			// console.log(combinedOtp);
			handleVerifyOTP(combinedOtp);
		}
	}
	function handleOnClick(index) {
		// The 1setSelectionRange(start, end)1 method is used to set the cursor position or select a portion of text in an <input> or <textarea> element.
		otpInputRef.current[index].setSelectionRange(1, 1);
	}

	function handleOnKeyDown(event, index) {
		if (
			event.key === "Backspace" &&
			index > 0 &&
			!otp[index] &&
			otpInputRef.current[index - 1]
		) {
			// move focus to prev input field.
			otpInputRef.current[index - 1].focus();
		}
	}

	function handleResendOTP(event) {
		// restart the time and hide the resend button.
		setTimeLeft(2 * 60);
		setShowResendOTPButton(false);

		const email = sessionStorage.getItem("userEmail");
		dispatch(resendOTP({ email }));
	}

	function handleVerifyOTP(otp) {
		const email = sessionStorage.getItem("userEmail");

		dispatch(verifyOTP({ email, otp }, navigate));
	}

	return (
		<div className="h-screen px-4">
			{/* Main Container - Contains actual content */}
			<div className="h-full grid place-content-center grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4">
				{/* OTP Verification SVG */}
				<div className="hidden lg:flex items-center justify-center">
					<img
						src={otpVerifySVG}
						alt="OTP Verification Illustration SVG"
						className="w-full h-full object-center object-contain"
					/>
				</div>

				{/* OTP Verification Form - Where use can enter the verification code. */}
				<div className="h-full flex flex-col justify-center items-start pr-4 space-y-4">
					<div className="flex flex-col mb-8">
						<h3 className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold">
							URL Shortener
						</h3>
						<p className="text-xs md:text-sm">
							Shorten, Share, and Track.
						</p>
					</div>

					<form className="flex flex-col justify-center space-y-2 w-full">
						<p className="mb-4">
							Enter the 4-digit code that is sent to your
							registered email address.
						</p>

						{/* OTP Input Fields */}
						<div className="grid grid-cols-4 gap-4 items-center">
							{otp.map((value, index) => {
								return (
									<input
										ref={
											// we can fire a callback inside a `ref` attribute, this is called as `callback ref`.
											(inputElement) => {
												// here this `input` points to the current DOM element.
												if (inputElement) {
													otpInputRef.current[index] =
														inputElement;
												}
											}
										}
										key={index}
										value={value}
										type="text"
										required
										className="h-10 w-auto text-sm rounded-md border border-primary outline-none text-center"
										onChange={(event) =>
											handleOnChange(event, index)
										}
										onClick={() => handleOnClick(index)}
										onKeyDown={(event) =>
											handleOnKeyDown(event, index)
										}
									/>
								);
							})}
						</div>

						<div className="my-4 flex flex-col gap-2">
							<p className="text-xs text-center">
								{showResendOTPButton
									? "Verification code expired:"
									: "Verification code expires in:"}
								<span className="font-medium">
									&nbsp;{minutes}:{seconds < 10 ? "0" : ""}
									{seconds}.&nbsp;
								</span>

								{/* Resend OTP Button */}
								{showResendOTPButton && (
									<button
										onClick={handleResendOTP}
										className="text-xs font-medium text-center cursor-pointer"
									>
										Resend OTP
									</button>
								)}
							</p>
							<p className="text-xs text-center text-red-800">
								Don't share the verification code with anyone!
							</p>
						</div>

						<button
							type="submit"
							className="bg-secondary rounded-md text-white h-10 text-sm cursor-pointer"
						>
							{loading ? (
								<PropagateLoader
									color="white"
									aria-label="Loading Spinner"
									size={7}
								/>
							) : (
								"Verify"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Verify;
