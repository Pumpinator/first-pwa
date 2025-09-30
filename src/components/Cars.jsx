import { Car } from "./Car";
import { cars } from "../cars";

export const Cars = () => {
    return (
        <section
            id="coches"
            className="container py-5 my-5"
        >
            <div className="text-center mb-5">
                <h2
                    className="text-white display-4 fw-bold mb-4"
                    style={{
                        fontFamily:
                            "Orbitron, Futura, sans-serif",
                    }}
                >
                    Coches
                </h2>
            </div>
            <div className="row justify-content-center">
                {cars.map((car) => (
                    <Car key={car.name} car={car} />
                ))}
            </div>
        </section>
    );
};
