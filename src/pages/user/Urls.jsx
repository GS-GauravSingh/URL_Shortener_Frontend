import React, { useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUrls } from "../../services/urlService";
import { PropagateLoader } from "react-spinners";

function Urls() {
	const dispatch = useDispatch();
	const { loading, urls } = useSelector((state) => state.url);

	function handleFetchUrls() {
		dispatch(fetchAllUrls());
	}

	return (
		<div className="h-screen w-full flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			<p className="text-center mt-6">
				<button
					onClick={handleFetchUrls}
					disabled={loading}
					className="bg-secondary w-fit text-white text-sm p-2 rounded-md font-medium cursor-pointer"
				>
					Fetch URL(s)
				</button>
			</p>

			{/* Main Body */}
			<main
				className={`${loading ? "flex items-center justify-center" : "overflow-auto"} flex-grow w-full my-6 px-4 space-y-6`}
			>
				{loading ? (
					<PropagateLoader
						color="#26619C"
						aria-label="Loading Spinner"
						size={7}
					/>
				) : (
					urls.length && (
						<table className="m-auto">
							<thead className=" sticky top-0 z-10">
								<tr className="bg-secondary text-white">
									<th className="px-4 py-2 rounded-tl-lg whitespace-nowrap">
										S.No.
									</th>
									<th className="px-4 py-2 whitespace-nowrap">
										Original URL
									</th>
									<th className="px-4 py-2 whitespace-nowrap">
										Shorten URL
									</th>
									<th className="px-4 py-2 rounded-tr-lg whitespace-nowrap">
										Click Count
									</th>
								</tr>
							</thead>

							<tbody className="text-sm">
								{urls.map(
									(
										{
											originalUrl,
											shortenUrl,
											visitHistory,
										},
										index
									) => {
										return (
											<tr
												key={index}
												className="even:bg-secondary/80 even:text-white"
											>
												<td className="text-center px-4 py-2 ">
													{index + 1}
												</td>
												<td className="text-center px-4 py-2  max-w-96 overflow-auto">
													{originalUrl}
												</td>
												<td className="text-center px-4 py-2  max-w-96 overflow-auto">
													{shortenUrl}
												</td>
												<td className="text-center px-4 py-2 ">
													{visitHistory.length}
												</td>
											</tr>
										);
									}
								)}
							</tbody>
						</table>
					)
				)}
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Urls;
