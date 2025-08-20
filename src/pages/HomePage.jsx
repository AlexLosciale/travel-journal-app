import { useState } from "react";

export default function HomePage() {
  const [filters, setFilters] = useState({
    place: "",
    mood: "",
    radius: "",
  });

  const [sortBy, setSortBy] = useState("");

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearch = () => {
    console.log("Filtri:", filters);
    console.log("Ordinamento:", sortBy);
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>Diario di viaggio</h1>
        <p>Qui puoi tenere traccia dei tuoi viaggi.</p>
      </div>

      <div className="mb-4">
        <h5 className="mb-3">Filtra i tuoi viaggi</h5>

        {/* Riga unica per Luogo */}
        <div className="row g-3 mb-3">
          <div className="col-12">
            <input
              type="text"
              id="place"
              className="form-control"
              placeholder="Cerca per luogo"
              value={filters.place}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Riga con 3 colonne: Mood, Raggio, Ordinamento */}
        <div className="row g-3">
          <div className="col-md-4">
            <select
              id="mood"
              className="form-select"
              value={filters.mood}
              onChange={handleFilterChange}
            >
              <option value="">-- Stato d'animo --</option>
              <option>Felice</option>
              <option>Stressato</option>
              <option>Emozionato</option>
              <option>Rilassato</option>
            </select>
          </div>

          <div className="col-md-4">
            <input
              type="number"
              id="radius"
              className="form-control"
              placeholder="Raggio (km)"
              value={filters.radius}
              onChange={handleFilterChange}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">-- Ordina per --</option>
              <option value="expense">Spesa economica</option>
              <option value="date">Data</option>
              <option value="distance">Raggio distanza</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleSearch}>
            Cerca
          </button>
        </div>
      </div>

      <div id="results">
        {/* Risultati filtrati */}
      </div>
    </div>
  );
}
