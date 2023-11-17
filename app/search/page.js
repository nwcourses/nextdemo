function Page({searchParams}) {
	return(
		<div>
		<h2>Search Results</h2>
		<p>You entered the artist: {searchParams.artist}</p>
		</div>
	);
}

export default Page;
