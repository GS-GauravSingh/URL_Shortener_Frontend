import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { LinkSimple } from "@phosphor-icons/react";

function Dashboard() {
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate("/user/url");
	}
	return (
		<div className="h-screen flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			{/* Main Body */}
			<main className="flex-grow flex flex-col items-center px-4 py-6 space-y-6">
				<form
					action=""
					onSubmit={handleSubmit}
					className="w-full max-w-[800px] space-y-4 shadow shadow-primary p-2 md:px-8 md:py-8 rounded-md"
				>
					<div className="flex flex-col items-center justify-center">
						<p className="text-lg md:text-xl lg:text-2xl text-center font-bold">
							Paste your link below and get a short, shareable
							URL.
						</p>
					</div>

					<div className="relative">
						<input
							type="text"
							name=""
							id=""
							placeholder="Enter long URL here"
							className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-12 text-sm text-primary tracking-wider !font-inter"
						/>

						<span className="absolute right-4 top-1/2 -translate-y-1/2">
							<LinkSimple size={20} weight="regular" />
						</span>
					</div>
					<button
						type="submit"
						className="w-full bg-secondary rounded-md text-white h-10 text-sm cursor-pointer"
					>
						Shorten URL
					</button>

					<div className="flex flex-col text-sm text-center">
						<p>
							<strong>URL Shortener</strong> is a free tool to
							shorten long URLs.
						</p>
						<p>
							Use this to shorten long URLs and share them
							effortlessly.
						</p>
					</div>
				</form>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Dashboard;
