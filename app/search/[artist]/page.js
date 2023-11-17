function Page({params}) {
	return(
		<div>
		<h2>Search Results</h2>
		<p>You entered the artist: {params.artist}</p>
		</div>
	);
}

export default Page;
