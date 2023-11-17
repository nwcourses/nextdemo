"use client"

import { useFormState } from 'react-dom';
import createSong from 'app/actions/createSong';

function AjaxAddSong() {
    const [state, actionCreateSong ] = useFormState(createSong, { id: 0 } );
    
    return(
        <div>
        <h2>AJAX Add Song</h2>
        Song ID: { state.id } Status: { state.status }
        <form action={actionCreateSong}>
        Title: <input name="title" /><br />
        Artist: <input name="artist" /><br />
        Year: <input name="year" /><br />
        <input type="submit" value="Add song!" />
        </form>
        </div>
    );
}

export default AjaxAddSong;

