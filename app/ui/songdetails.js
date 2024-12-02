"use client"

export default function SongDetails({song}) {

    return(
        <div>
        {song.title} by {song.artist}, year {song.year}    
        </div>
    );
}
