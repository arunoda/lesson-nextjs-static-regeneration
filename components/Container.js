export function Container ({children}) {
    return (
        <div className="container">
            {children}
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

                .container :global(.music .name) {
                    font-size: 25px;
                    font-weight: 600;
                    margin: 0 0 5px 0;
                }

                .container :global(.music .image img) {
                    width: 250px;
                    height: 250px;
                }

                .container :global(.music .image) {
                    margin: 20px 0;
                }

                .container :global(.reload) {
                    margin: 10px 0;
                }

                .container :global(.lesson-info a),
                .container :global(.reload a) {
                    color: #03A9F4;
                    text-decoration: none;
                    padding-bottom: 2px;
                    border-bottom: 1px solid #03A9F4;
                }

                .container :global(.lesson-info) {
                    margin: 20px 0;
                }
            `}</style>
        </div>
    )
}