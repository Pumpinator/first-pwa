export const Header = () => (
    <nav
        className="navbar navbar-expand-lg position-fixed w-100"
        style={{
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
    >
        <div className="container">
            <a
                className="nav-link text-white-50"
                href="#inicio"
                style={{
                    fontFamily:
                        "Share Tech, Futura, sans-serif",
                }}
            >
                Inicio
            </a>
            <a
                className="nav-link text-white-50"
                href="#coches"
                style={{
                    fontFamily:
                        "Share Tech, Futura, sans-serif",
                }}
            >
                Coches
            </a>
            <a
                className="nav-link text-white-50"
                href="#gameplay"
                style={{
                    fontFamily:
                        "Share Tech, Futura, sans-serif",
                }}
            >
                Gameplay
            </a>
        </div>
    </nav>
);