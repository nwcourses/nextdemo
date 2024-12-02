"use client"

import { useActionState } from 'react';
import createSong from 'app/actions/createSong';

export default function AddSong() {
    const [state, actionCreateSong ] = useActionState(createSong, { id: 0 } );
    
    return(
        <div>
        <h2>Add Song</h2>
        { state.id ? "Song ID: " + state.id : "" } <strong>{ state.status }</strong>
        <form action={actionCreateSong}>
        Title:<br /> <input name="title" /><br />
        Artist:<br /> <input name="artist" /><br />
        Year:<br /> <input name="year" /><br />
        <input type="submit" value="Add song!" />
        </form>
        </div>
    );
}

