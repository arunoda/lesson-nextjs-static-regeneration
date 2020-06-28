const popularArtists = ["Post Malone","Ariana Grande","Billie Eilish","Khalid","Drake","Travis Scott","Ed Sheeran","Taylor Swift","Lil Nas X","Halsey","Jonas Brothers","Juice WRLD","Cardi B","DaBaby","BTS","Panic! At The Disco","Luke Combs","Lil Baby","Shawn Mendes","Lizzo","Meek Mill","Queen","Dan + Shay","A Boogie Wit da Hoodie","P!nk","Chris Brown","XXXTENTACION","J. Cole","Elton John","Imagine Dragons","Bad Bunny","Kodak Black","21 Savage","YoungBoy Never Broke Again","Gunna","Kane Brown","Lady Gaga","Marshmello","Thomas Rhett","Maroon 5","Swae Lee","Camila Cabello","Sam Smith","YNW Melly","The Rolling Stones","5 Seconds Of Summer","Lauren Daigle","Lil Tecca","Metallica","Bruno Mars","Young Thug","Ella Mai","Bradley Cooper","Lewis Capaldi","Eminem","Jason Aldean","NF","Michael Buble","Ava Max","The Beatles","Normani","Florida Georgia Line","twenty one pilots","Billy Ray Cyrus","Chris Stapleton","Summer Walker","Morgan Wallen","Bastille","Offset","Trippie Redd","Tyler, The Creator","Future","Lil Wayne","Blake Shelton","Justin Bieber","City Girls","Blueface","Carrie Underwood","Kanye West","DJ Khaled","Billy Joel","Eagles","Backstreet Boys","Paul McCartney","Megan Thee Stallion","Maren Morris","Bazzi","Mustard","6ix9ine","Kendrick Lamar","Polo G","Sheck Wes","Migos","Lil Uzi Vert","Nipsey Hussle","Fleetwood Mac","The Weeknd","Eric Church","benny blanco","Luke Bryan"];

export async function findSong() {
    const index = Math.floor(Math.random() * popularArtists.length)
    const artist = popularArtists[index]

    const fetchRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&limit=10`)
    if (!fetchRes.ok) {
        throw new Error(`Fetching music failed with status=${fetchRes.status}, error=${await (await fetchRes).text()}`)
    }

    const {results: songs} = await fetchRes.json()
    const songIndex = Math.floor(Math.random() * songs.length)
    const song = songs[songIndex]

    return {
        preview: song.previewUrl,
        name: song.trackName,
        artist: song.artistName,
        trackUrl: song.trackViewUrl,
        released: (new Date(song.releaseDate)).getTime(),
        artwork: song.artworkUrl100.replace('100x100', '600x600')
    }
}