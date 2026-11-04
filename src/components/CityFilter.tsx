type CityFilterProps = {
    selectedCity: string;
    onCityChange: (city: string) => void;
};

const cities = [
    "All Cities",
    "Lisbon",
    "Porto",
    "Braga",
    "Coimbra",
];

function CityFilter({
    selectedCity,
    onCityChange,
}: CityFilterProps) {
    return(
        <div className="filter-container">
            <label htmlFor="city-filter">Filter by City:</label>

            <select
            id="city-filter"
            value={selectedCity}
            onChange={(event) => onCityChange(event.target.value)}>
                {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    );
}

export default CityFilter;