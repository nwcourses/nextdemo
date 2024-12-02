"use server"

import Database from 'better-sqlite3';

export default async function createSong(prevState, formData) {
    
    const title = formData.get("title"), artist = formData.get("artist"),
        year = formData.get("year");

    const db = new Database("assets/wadsongs.db");
    
    if(title == "" || artist == "" || year == "") {
        return { status: "Blank form fields!" };
    } else {
        const stmt = db.prepare("INSERT INTO wadsongs(title,artist,year) VALUES(?,?,?)");
        const info = stmt.run(title, artist, year);
        return { status: "OK", id: info.lastInsertRowid };
    }
}
