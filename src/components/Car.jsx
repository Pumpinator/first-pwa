export const Car = ({car}) => {
    return (
        <div
            className="col-12 col-md-4 d-flex flex-column align-items-center mb-4"
            key={car.name}
        >
            <img
                src={car.img}
                alt={car.name}
                style={{ height: "120px" }}
                className="mb-2"
            />
            <span className="text-white fw-semibold">
                {car.name}
            </span>
        </div>
    );
};