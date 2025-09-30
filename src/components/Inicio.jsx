export const Inicio = () => {
    return (
        <section
            id="inicio"
            className="container d-flex flex-column align-items-center justify-content-center min-vh-100"
        >
            <div className="text-center">
                <img
                    src="/public/logo.png"
                    className="logo mb-3"
                    alt="Le Mans Arcade Logo"
                />
                <h1
                    className="text-white display-1 fw-bold mb-4"
                    style={{
                        fontFamily:
                            "Orbitron, Futura, sans-serif",
                    }}
                >
                    Le Mans Arcade
                </h1>
                <p
                    className="text-white fs-4 mb-5"
                    style={{
                        maxWidth: 500,
                        margin: "0 auto",
                    }}
                >
                    Un juego de carreras 2D con vista
                    superior, inspirado en la legendaria
                    pista de Le Mans. Elige tu coche
                    favorito y compite en un circuito
                    desafiante. Minimalista, rápido y retro.
                </p>
            </div>
        </section>
    );
};