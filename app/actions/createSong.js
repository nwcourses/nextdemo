"use server"

function createSong(prevState, formData) {
    
    const title = formData.get("title"), artist = formData.get("artist"),
        year = formData.get("year");
    
    if(title == "" || artist == "" || year == "") {
        return { status: "Blank form fields!" };
    } else {
        return { status: "OK", id: Math.round(Math.random()*1000) };
    }
}

export default createSong;
