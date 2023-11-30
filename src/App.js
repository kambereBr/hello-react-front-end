import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Greetings />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </section>
  );
}

export default App;
