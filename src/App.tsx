import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Calculation from './pages/Calculation/Calculation';
// Импортируйте другие страницы

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculation />} />
        {/* Добавьте другие маршруты */}
      </Routes>
    </Router>
  );
};

export default App;
