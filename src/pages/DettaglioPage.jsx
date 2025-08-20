import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TripsContext } from "../context/TripsContext";

export default function DettaglioPage() {
  const { id } = useParams();
  const { trips } = useContext(TripsContext);

  const trip = trips.find((t) => t.id.toString() === id);

  if (!trip) return <p className="text-center mt-5">Viaggio non trovato!</p>;

  return (
    <div className="container mt-5 mb-5">
      {trip.media[0] && (
        <div className="mb-4 position-relative text-center">
          <img
            src={trip.media[0]}
            alt={trip.place}
            className="img-fluid rounded shadow-sm"
            style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
          <h1
            className="text-white fw-bold"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              fontSize: "4rem",
            }}
          >
            {trip.place}
          </h1>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
<h2 className="card-title mb-3">{trip.place}</h2>
          <p className="card-text mb-4">{trip.description}</p>

          <div className="row">
            <div className="col-md-6 mb-3">
              <p><strong>Stato d’animo:</strong> {trip.mood}</p>
              <p><strong>Riflessione positiva:</strong> {trip.positive}</p>
              <p><strong>Riflessione negativa:</strong> {trip.negative}</p>
            </div>
            <div className="col-md-6 mb-3">
              <p><strong>Impegno fisico:</strong> {trip.physical}/5</p>
              <p><strong>Effort economico:</strong> {trip.economic}/5</p>
              <p><strong>Spesa effettiva:</strong> €{trip.actualExpense}</p>
              <p><strong>Tags:</strong> {trip.tags.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
