import React from 'react';
import Hero from './(src)/componenets/ Hero';
import Header from './(src)/componenets/Header';
import Footer from './(src)/componenets/Footer';
import Counter from './(src)/componenets/Counter';
import PopularCourses from './(src)/componenets/PopularCourses';
import TrendingCourses from './(src)/componenets/TrendingCourses';

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <TrendingCourses />
      <PopularCourses />

      <Footer />
    </>
  );
}
