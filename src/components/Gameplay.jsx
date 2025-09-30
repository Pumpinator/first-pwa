export const Gameplay = () => (
    <section id="gameplay" className="container py-5 my-5">
        <div className="text-center">
            <h2
                className="text-white display-4 fw-bold mb-5"
                style={{
                    fontFamily:
                        "Orbitron, Futura, sans-serif",
                }}
            >
                Gameplay
            </h2>
            <div className="row justify-content-center mb-5">
                <img
                    src="/public/game.gif"
                    alt="Demo del videojuego"
                    style={{ height: "360px" }}
                    className="mb-4"
                />
            </div>
        </div>
    </section>
);