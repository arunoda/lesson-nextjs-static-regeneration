import { findSong } from '../lib/find-song'
import { Container } from '../components/Container';

export default function Home({ song }) {
    return (
        <Container>
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
        </Container>
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