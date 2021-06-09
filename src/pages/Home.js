import React from 'react';
import Hero from '../component/Hero';
import Benefits from '../component/Benefits';
import Cta from '../component/Cta';
import Features from '../component/Features';
import Validation from '../component/Validation';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Cta />
      <Features />
      <Validation />
    </>
  );
}
