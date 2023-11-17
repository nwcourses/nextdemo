import SongDetails from 'app/ui/songdetails';

function SearchResults({artist}) {
    
    // This should actually come from a database, change the code so it does
    // Just create some fake data for now
    const fakeData = [ {
        "id": 1,
        "song": "Imagine",
        "artist": "John Lennon",
        "year": 1971
    }, {
        "id" : 2,
        "song": "(Just Like) Starting Over",
        "artist": "John Lennon",
        "year" : 1980
    } ];

    const output = fakeData.map ( song => <SongDetails key={song.id} song={song} /> );

    return <div>{output}</div>;
}

export default SearchResults;    
