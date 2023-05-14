import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Student from 'scenes/student';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
