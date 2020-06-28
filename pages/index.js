import { findSong } from '../lib/find-song'
import { Container } from '../components/Container';
import { useEffect } from 'react';

export default function Home({ song }) {
    useEffect(() => {
        const handler = setTimeout(() => {
            fetch('/')
        }, 3500)

        return () => clearTimeout(handler)
    }, [])

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

export async function getStaticProps() {
    const song = await findSong();

    return {
        props: {
            song
        },
        unstable_revalidate: 3
    }
}
