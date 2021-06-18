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
              <h1 className='text-center'>Somos Focseed</h1>
            </div>
          </div>
        </Parallax>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='content'>
              <h4 className='mb-4'>
                Desde hace más 17 de años la empresa se destaca en la región por
                su profesionalismo, cercanía y la robustez de las marcas y
                productos que distribuye y representa.
              </h4>
              <blockquote className='blockquote'>
                "Proveemos de insumos agropecuarios a productores y empresas
                líderes de una amplia región"
              </blockquote>
              <p>
                Nuestros principales principios o verticales se centran en la
                excelencia y disponibilidad de:
              </p>
              <ul className='list-neted'>
                <li>
                  Semillas, Agroquímicos y otros insumos para la producción
                  agrícola.
                </li>
                <li>
                  Somos representantes de las marcas líderes que ya elijen
                  productores líderes, además contamos con servicio de logística
                  para llevarte una solución a cada situación.
                </li>
                <li>
                  Profesionales y próximos a tu campo, el objetivo de llevar la
                  campaña de nuestros clientes al máximo y el asesoramiento
                  permanente permite a un sin número de productores planificar
                  sus compras y optimizar su rinde con nuestro asesoramiento.
                </li>
              </ul>
              <p>
                Los maíces más sembrados del mercado se cultivan con Soluciones
                Focseed.
              </p>
              <p>
                Actualmente desarrollamos una ambiciosa campaña de maíz 2021 de
                la mano de la amplia variedad de semillas Dekalb.
              </p>
              <p>
                Promovemos con visión de futuro un campo sustentable y apoyamos
                el desarrollo de nuevos sistemas productivos, somos asesores y
                facilitadores del uso de las nuevas tecnologías aplicadas al
                campo y eso es posible gracias a la integración de sistemas de
                vanguardia.
              </p>
              <p>
                Hablamos de Soluciones integrales porque sumamos la experiencia
                de nuestros clientes-productores a nuestros productos y al
                asesoramiento de nuestra área Técnica-Comercial, un combo que
                lleva tu rinde y producción al máximo.
              </p>
              <p>
                Entendemos que la experiencia, compromiso y calidad de productos
                en cartera, nos convierten en socios estratégicos de productores
                que siguen un alto rendimiento.
              </p>
              <p>
                Nos ubicamos en uno de los principales polos industriales en el
                acceso sur de nuestra ciudad, promovemosun campo sostenible,
                productivo y rentable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
