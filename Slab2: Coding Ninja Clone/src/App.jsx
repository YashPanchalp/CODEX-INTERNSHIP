// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is persistent */}
      <Navbar />

      {/* Main content area where pages will be swapped */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes here (e.g., Blog, Login) */}
          <Route path="/blog" element={<h1 className="text-center p-10 text-3xl">Blog Page</h1>} />
          <Route path="/login" element={<h1 className="text-center p-10 text-3xl">Login Page</h1>} />
        </Routes>
      </main>

      {/* Footer is persistent */}
      <Footer />
    </div>
  );
}

export default App;