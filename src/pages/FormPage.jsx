export default function FormPage() {
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
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="mediaFile" className="form-label fw-bold fs-5">
                  Oppure carica file
                </label>
                <input type="file" className="form-control" id="mediaFile" />
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
                />
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
                ></textarea>
              </div>
  
              <div className="mb-3">
                <label htmlFor="mood" className="form-label fw-bold fs-5">
                  Stato d'animo
                </label>
                <select id="mood" className="form-select">
                  <option value="">-- Seleziona --</option>
                  <option>Felice</option>
                  <option>Stressato</option>
                  <option>Emozionato</option>
                  <option>Rilassato</option>
                </select>
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
                />
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
                />
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
                  defaultValue="1"
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
                  defaultValue="1"
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
                />
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
                />
              </div>
            </div>
          </div>
  
          <div className="text-center mt-4 mb-5">
            <button type="button" className="btn btn-primary">
              Salva
            </button>
          </div>
        </form>
      </div>
    );
}
  