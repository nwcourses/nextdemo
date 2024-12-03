import Search from 'app/ui/search.js';
import SearchResults from 'app/ui/searchresults.js';

export default function Page({searchParams}) {
    return(
        <div>
        <h2>Search Results</h2>
        <p>{ searchParams.artist ? "You entered the artist: " + searchParams.artist : "" }</p>
        <Search />
        <SearchResults artist={searchParams.artist} />
        </div>
    );
}
