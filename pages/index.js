import { findSong } from '../lib/find-song'

export default function Home({ song }) {
    return (
        <div className="container">
            <div className="music">
                <div className="name">{song.name}</div>
                <div className="artist">by {song.artist}</div>
                <div className="image">
                    <a href={song.trackUrl} target="_blank">
                        <img src={song.artwork} />
                    </a>
                </div>
                <audio controls loop>
                    <source src={song.preview} type="audio/mpeg" />
                </audio>
                <div className="reload">
                    <a href="/">Try Another One</a>
                </div>
            </div>
            <style jsx>{`
                .container {
                    text-align: center;
                    font-family: arial;
                    margin: auto 10px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .music .name {
                    font-size: 25px;
                    font-weight: 600;
                    margin: 0 0 5px 0;
                }

                .music .image img {
                    width: 250px;
                    height: 250px;
                }

                .music .image {
                    margin: 20px 0;
                }

                .reload {
                    margin: 10px 0;
                }

                .reload a {
                    color: #03A9F4;
                    text-decoration: none;
                    padding-bottom: 2px;
                    border-bottom: 1px solid #03A9F4;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps() {
    const song = await findSong();
    return {
        props: {
            song
        }
    }
}