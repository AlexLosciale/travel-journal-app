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

  const exampleTrips = [
    {
      id: 1,
      place: "Roma",
      description: "Bellissima città ricca di storia.",
      mood: "Emozionato",
      positive: "Ho apprezzato ogni monumento e piazza.",
      negative: "Troppo turismo in alcune zone.",
      physical: 3,
      economic: 4,
      actualExpense: 120,
      tags: ["cultura", "storia"],
      media: ["https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg"]
    },
    {
      id: 2,
      place: "Montagna",
      description: "Trekking tra le vette.",
      mood: "Rilassato",
      positive: "L’aria fresca e il panorama mozzafiato.",
      negative: "Sentieri impegnativi.",
      physical: 5,
      economic: 3,
      actualExpense: 80,
      tags: ["natura", "avventura"],
      media: ["https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/07/14_Val_di_Funes_iStock-1.jpg?v=1626269084"]
    }
  ];

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>Diario di viaggio</h1>
      </div>

      <div className="mb-4">
        <h5 className="mb-3">Filtra i tuoi viaggi</h5>
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

      <div className="mb-5">
        {exampleTrips.map((trip) => (
          <div key={trip.id} className="card mb-4 shadow-sm">
            <div className="row g-0">
              <div className="col-md-4">
                {trip.media[0] && (
                  <img
                    src={trip.media[0]}
                    alt={trip.place}
                    className="img-fluid rounded-start"
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                )}
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{trip.place}</h5>
                  <p className="card-text">{trip.description}</p>

                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Stato d’animo:</strong> {trip.mood}</p>
                      <p><strong>Riflessione positiva:</strong> {trip.positive}</p>
                      <p><strong>Riflessione negativa:</strong> {trip.negative}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Impegno fisico:</strong> {trip.physical}/5</p>
                      <p><strong>Effort economico:</strong> {trip.economic}/5</p>
                      <p><strong>Spesa effettiva:</strong> €{trip.actualExpense}</p>
                      <p><strong>Tags:</strong> {trip.tags.join(", ")}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
