import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeaturedGalleries from './pages/FeaturedGalleries.tsx';
import HomePage from './pages/HomePage';
import MCQPracticeApp from './pages/MCQPracticeApp.tsx';
import StoryPage from './pages/StoryPage.tsx';


function App() {
  return (
    <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/FeaturedGalleries" element={<FeaturedGalleries />} />
          <Route path="/QuizPage" element={<MCQPracticeApp />} />
          <Route path="/StoryPage" element={<StoryPage />} />
        </Routes>
    </Router>
  );
}

export default App;
