import {useState, useEffect} from 'react'

export default function Home({ updatedAt }) {
    const [now, setNow] = useState(Date.now())

    useEffect(() => {
        const handler = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(handler)
    }, [])


    const diffSecs = Math.floor((now - updatedAt) / 1000)
    return (
        <div className="container">
            <h1>This is a Static Page</h1>
            <div>
                Updated at {updatedAt} ({diffSecs} secs ago.)
            </div>
            <style jsx>{`
                .container {
                    font-family: arial;
                    margin: 30px 10px;
                }
            `}</style>
        </div>
    )
}

export function getStaticProps() {
    return {
        props: {
            updatedAt: Date.now()
        }
    }
}