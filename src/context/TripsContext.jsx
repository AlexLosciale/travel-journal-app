import { createContext, useState } from "react";

export const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([
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
      media: ["https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg"],
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
      media: ["https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/07/14_Val_di_Funes_iStock-1.jpg?v=1626269084"],
    },
  ]);

  const addTrip = (trip) => {
    setTrips((prev) => [...prev, { ...trip, id: prev.length + 1 }]);
  };

  return (
    <TripsContext.Provider value={{ trips, addTrip }}>
      {children}
    </TripsContext.Provider>
  );
};