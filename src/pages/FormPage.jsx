import { useState } from "react";

export default function FormPage() {
  const [formData, setFormData] = useState({
    mediaUrl: "",
    mediaFile: null,
    place: "",
    description: "",
    mood: "",
    positive: "",
    negative: "",
    physicalEffort: 1,
    economicEffort: 1,
    expense: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.mediaUrl && !formData.mediaFile) newErrors.mediaUrl = "Devi inserire un URL o caricare un file";
    if (!formData.place) newErrors.place = "Campo obbligatorio";
    if (!formData.description) newErrors.description = "Campo obbligatorio";
    if (!formData.mood) newErrors.mood = "Seleziona uno stato d'animo";
    if (!formData.positive) newErrors.positive = "Campo obbligatorio";
    if (!formData.negative) newErrors.negative = "Campo obbligatorio";
    if (!formData.expense) newErrors.expense = "Campo obbligatorio";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form inviato correttamente!");

      setFormData({
        mediaUrl: "",
        mediaFile: null,
        place: "",
        description: "",
        mood: "",
        positive: "",
        negative: "",
        physicalEffort: 1,
        economicEffort: 1,
        expense: "",
        tags: "",
      });
  
      setErrors({});
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Form di Inserimento Viaggio</h1>

      <form>
        <div className="row g-3 mb-6">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="mediaUrl" className="form-label fw-bold fs-5">
                Foto / Video (URL)
              </label>
              <input
                type="url"
                className="form-control"
                id="mediaUrl"
                placeholder="Inserisci URL immagine o video"
                value={formData.mediaUrl}
                onChange={handleChange}
              />
              {errors.mediaUrl && <small className="text-danger">{errors.mediaUrl}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="mediaFile" className="form-label fw-bold fs-5">
                Oppure carica file
              </label>
              <input
                type="file"
                className="form-control"
                id="mediaFile"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="place" className="form-label fw-bold fs-5">
                Luogo
              </label>
              <input
                type="text"
                className="form-control"
                id="place"
                placeholder="Inserisci il luogo"
                value={formData.place}
                onChange={handleChange}
              />
              {errors.place && <small className="text-danger">{errors.place}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-bold fs-5">
                Descrizione
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Descrivi la tua esperienza"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && <small className="text-danger">{errors.description}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="mood" className="form-label fw-bold fs-5">
                Stato d'animo
              </label>
              <select
                id="mood"
                className="form-select"
                value={formData.mood}
                onChange={handleChange}
              >
                <option value="">-- Seleziona --</option>
                <option>Felice</option>
                <option>Stressato</option>
                <option>Emozionato</option>
                <option>Rilassato</option>
              </select>
              {errors.mood && <small className="text-danger">{errors.mood}</small>}
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="positive" className="form-label fw-bold fs-5">
                Cosa ti porterai da questo posto
              </label>
              <input
                type="text"
                className="form-control"
                id="positive"
                placeholder="Scrivi un pensiero positivo"
                value={formData.positive}
                onChange={handleChange}
              />
              {errors.positive && <small className="text-danger">{errors.positive}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="negative" className="form-label fw-bold fs-5">
                Cosa ti ha convinto di meno
              </label>
              <input
                type="text"
                className="form-control"
                id="negative"
                placeholder="Scrivi un pensiero negativo"
                value={formData.negative}
                onChange={handleChange}
              />
              {errors.negative && <small className="text-danger">{errors.negative}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="physicalEffort" className="form-label fw-bold fs-5">
                Impegno fisico (1-5)
              </label>
              <input
                type="range"
                className="form-range"
                id="physicalEffort"
                min="1"
                max="5"
                value={formData.physicalEffort}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <small>1</small>
                <small>5</small>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="economicEffort" className="form-label fw-bold fs-5">
                Effort economico (1-5)
              </label>
              <input
                type="range"
                className="form-range"
                id="economicEffort"
                min="1"
                max="5"
                value={formData.economicEffort}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between">
                <small>1</small>
                <small>5</small>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="expense" className="form-label fw-bold fs-5">
                Spesa effettiva (€)
              </label>
              <input
                type="number"
                className="form-control"
                id="expense"
                placeholder="Inserisci la spesa in euro"
                value={formData.expense}
                onChange={handleChange}
              />
              {errors.expense && <small className="text-danger">{errors.expense}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="tags" className="form-label fw-bold fs-5">
                Tags
              </label>
              <input
                type="text"
                className="form-control"
                id="tags"
                placeholder="Inserisci tag separati da virgola"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 mb-5">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Salva
          </button>
        </div>
      </form>
    </div>
  );
}
