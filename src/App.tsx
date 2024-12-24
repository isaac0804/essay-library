import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProfilePage } from './pages/ProfilePage';
import { FeedbackPage } from './pages/FeedbackPage';
import { EssayPage } from './pages/EssayPage';
import { createClient } from '@supabase/supabase-js';
import SupabaseContext from './supabaseContext';

// Use import.meta.env to access environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);


function App() {
  return (
    <SupabaseContext.Provider value={{ supabase }}>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/essay/:uuid" element={<EssayPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route path="/feedback" element={<FeedbackPage />} /> */}
        </Routes>
      </div>
    </Router>
    </SupabaseContext.Provider>
  );
}

export default App;
