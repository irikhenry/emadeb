import React, { useState } from 'react';
import { HomePage } from '@/app/components/HomePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // All navigation now stays on home page with smooth scrolling
  return <HomePage onNavigate={navigate} />;
}