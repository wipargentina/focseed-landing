import React from 'react';
import Hero from 'components/Hero';
import Benefits from 'components/Benefits';
import Cta from 'components/Cta';
import Features from 'components/Features';
import Validation from 'components/Validation';

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
