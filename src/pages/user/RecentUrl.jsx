import React, { useEffect, useRef } from "react";
import { Footer, Navbar } from "../../components";
import { CopySimple } from "@phosphor-icons/react";
import { FaCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentUrl } from "../../services/urlService";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";

function RecentUrl() {
	const { recent, loading } = useSelector((state) => state.url);
	const dispatch = useDispatch();
	const passwordInputRef = useRef(null);

	function fetchRecent(event) {
		event.preventDefault();
		dispatch(fetchRecentUrl());
	}

	function handleCopyToClipboard(event) {
		event.preventDefault();

		if (passwordInputRef.current?.value) {
			passwordInputRef.current?.select();
			window.navigator.clipboard.writeText(recent?.shortenUrl);
			toast.success("Link copied to clipboard!");
		} else {
			toast.info("Nothing to copy!");
		}
	}

	return (
		<div className="h-screen w-full flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			{/* Main Body */}
			<main className="flex-grow flex flex-col items-center px-4 py-6 space-y-6">
				<div className={`text-center ${loading && "h-full flex items-center justify-center"}`}>
					{loading ? (
						<PropagateLoader
							color="#26619C"
							aria-label="Loading Spinner"
							size={7}
						/>
					) : (
						<div className="flex flex-col gap-6 items-center">
							{recent && Object.keys(recent).length ? (
								<div className="">
									<h3 className="text-lg md:text-xl lg:text-2xl font-bold">
										Your Short Link is Ready!
									</h3>
									<p>
										Copy, share, and manage your links with
										ease.
									</p>
								</div>
							) : (
								""
							)}

							<button
								onClick={fetchRecent}
								disabled={loading}
								className="bg-secondary w-fit text-white text-sm px-2 py-2 rounded-md font-medium cursor-pointer disabled:cursor-no-drop"
							>
								Fetch Recent
							</button>
						</div>
					)}
				</div>

				{!loading && recent && Object.keys(recent).length ? (
					<form
						action=""
						className="w-full max-w-[500px] space-y-4 shadow shadow-primary p-2 md:px-8 md:py-8 rounded-md"
					>
						<div className="relative">
							<input
								type="text"
								name=""
								id=""
								value={
									recent?.shortenUrl ? recent?.shortenUrl : ""
								}
								placeholder="It’s empty here! Shorten your first URL."
								readOnly
								className="w-full bg-white h-10 rounded-md outline-none border border-primary pl-4 pr-14 text-sm text-primary tracking-wider !font-inter"
								ref={passwordInputRef}
							/>

							<button
								className="absolute right-0 top-1/2 -translate-y-1/2 h-full border rounded-tr-md rounded-br-md bg-secondary flex items-center justify-center px-4 cursor-pointer"
								title="Copy URL"
								onClick={handleCopyToClipboard}
							>
								<FaCopy className="text-white text-xl" />
							</button>
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
				) : loading ? (
					""
				) : (
					<p className="font-medium h-full flex items-center justify-center">
						<em>
							Looks like you haven't created a short link
							recently. Generate one now!
						</em>
					</p>
				)}
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default RecentUrl;
