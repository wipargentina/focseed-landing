import React from 'react';
import { Parallax } from 'react-parallax';

const IMAGE_BACKGROUND =
  'https://images.unsplash.com/photo-1565522734001-f00e62ec8424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

export default function AboutUs() {
  return (
    <section className='about'>
      <div className='parallax'>
        <Parallax bgImage={IMAGE_BACKGROUND} strength={400}>
          <div className='parallax-content'>
            <div className='parallax-inside'>
              <h1 className='text-center'>Sobre Nosotros</h1>
            </div>
          </div>
        </Parallax>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h2 className='mb-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nostrum.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              nihil magnam reprehenderit alias, enim quibusdam modi ex saepe at
              possimus numquam nulla distinctio in voluptatum ea. Rem nihil,
              aliquid minima maxime magni aspernatur enim beatae atque nam
              cupiditate officiis cumque non alias eaque tempora sed
              reprehenderit iusto facere dolorum? Expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              nihil magnam reprehenderit alias, enim quibusdam modi ex saepe at
              possimus numquam nulla distinctio in voluptatum ea. Rem nihil,
              aliquid minima maxime magni aspernatur enim beatae atque nam
              cupiditate officiis cumque non alias eaque tempora sed
              reprehenderit iusto facere dolorum? Expedita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
