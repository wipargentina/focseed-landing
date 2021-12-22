import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Phrase from './Phrase';
import Footer from './Footer';
import FormWhatsapp from './FormWhatsapp';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Phrase />
      <Form />
      <FormWhatsapp />
      <Footer />
    </>
  );
}
