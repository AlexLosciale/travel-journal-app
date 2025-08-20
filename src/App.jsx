import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import DettaglioPage from './pages/DettaglioPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={HomePage} />
            <Route path="/form" Component={FormPage} />
            <Route path="/dettaglio/:id" Component={DettaglioPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
