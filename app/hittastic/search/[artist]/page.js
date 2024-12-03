import SearchResults from 'app/ui/searchresults.js';

export default function Page({params}) {
    return(
        <div>
        <h2>Search Results</h2>
        <p>You entered the artist: {params.artist}</p>
        <SearchResults artist={params.artist} />
        </div>
    );
}
