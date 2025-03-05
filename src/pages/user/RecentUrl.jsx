import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { CopySimple } from "@phosphor-icons/react";
import { FaCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentUrl } from "../../services/urlService";

function RecentUrl() {
	const { recent, loading } = useSelector((state) => state.url);
	const dispatch = useDispatch();

	function fetchRecent(event){
		event.preventDefault();
		dispatch(fetchRecentUrl());
	}


	return (
		<div className="h-screen w-full flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			{/* Main Body */}
			<main className="flex-grow flex flex-col items-center px-4 py-6 space-y-6">
				<div className="">
					<h3 className="text-lg md:text-xl lg:text-2xl font-bold">
						Your Short Link is Ready!
					</h3>
					<p>Copy, share, and manage your links with ease.</p>
				</div>

				<form
					action=""
					className="w-full max-w-[500px] space-y-4 shadow shadow-primary p-2 md:px-8 md:py-8 rounded-md"
				>
					<p className="text-center">
						<button onClick={fetchRecent} className="bg-secondary w-fit text-white text-sm p-2 rounded-md font-medium cursor-pointer">
							Fetch Recent
						</button>
					</p>

					<div className="relative">
						<input
							type="text"
							name=""
							id=""
							value={recent?.shortenUrl ? recent?.shortenUrl : ""}
							placeholder="It’s empty here! Shorten your first URL."
							readOnly
							className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-14 text-sm text-primary tracking-wider !font-inter"
						/>

						<span
							className="absolute right-0 top-1/2 -translate-y-1/2 h-full border rounded-tr-md rounded-br-md bg-secondary flex items-center justify-center px-4 cursor-pointer"
							title="Copy URL"
						>
							<FaCopy className="text-white text-xl" />
						</span>
					</div>

					<p className="text-sm">
						<strong>Long URL:&nbsp;</strong>

						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							className=""
						>
							{recent?.originalUrl
								? recent?.originalUrl
								: "Your original URL will be shown here once you create a short link."}
						</a>
					</p>
				</form>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default RecentUrl;
