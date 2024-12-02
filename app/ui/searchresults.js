import SongDetails from 'app/ui/songdetails';
import Database from 'better-sqlite3';

export default function SearchResults({artist}) {

    const db = new Database("assets/wadsongs.db");    

    const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist=? ORDER BY id");
    const results = stmt.all(artist);

    const output = results.map ( song => <SongDetails key={song.id} song={song} /> );

    return <div>{output}</div>;
}
