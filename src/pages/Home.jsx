import { InfoCard } from 'components/InfoCard';
import { InfoLink } from 'components/InfoLink';
import React from 'react';

const Home = () => (
  <main>
    <div>
      <table className='table-fixed w-full h-screen'>
        <tr>
          <td className='bg-gradient-to-br from-black to-red-700  w-2/5'>
            <div>
              <img
                className='object-contain rounded-full mx-auto'
                src='FotoMarcelo.jpg'
                alt='Foto marcelo de la hoz'
              />
            </div>
            <h1 className='text-white text-2xl font-bold text-center '>
              Marcelo De la hoz Sierra
            </h1>
            <div>
              <table className='my-4'>
                <InfoLink
                  imgAlt='gmail logo'
                  path='GmailLogo.webp'
                  conection='https://mail.google.com/mail/u/0/?tab=wm#inbox'
                  info='marcelo.delahozs@udea.edu.co'
                />
                <InfoLink
                  imgAlt='github logo'
                  path='Githublogo.png'
                  conection='https://github.com/rainymarcelo'
                  info='rainymarcelo'
                />
                <InfoLink
                  imgAlt='linkedin logo'
                  path='LinkedinLogo.png'
                  conection='https://www.linkedin.com/in/marcelo-de-la-hoz-86434b242/'
                  info='Marcelo De la Hoz'
                />
              </table>
            </div>
          </td>
          <td className='py-8 px-4 text-center'>
            Soy estudiante de ingeniería de sistemas de séptimo semestre en la
            universidad de Antioquia, tengo 23 años y en este momento resido en
            Medellín.
            <div className='py-4 flex justify-center gap-4 flex-wrap mx-4 '>
              <InfoCard
                subtitle='Historia académica'
                info='Colegio Calasanz Medellin 2004-2016'
                info2='Universidad Nacional sede Medellín 2017-2018'
                info3='Universida de Antioquia 2018-presente'
              />
              <InfoCard
                subtitle='Intereses'
                info='Desarrollo backend'
                info2='Desarrollo frontEnd'
                info3='data science'
                info4='IA'
              />
              <InfoCard
                subtitle='Hobbies'
                info='Leer libros y comics'
                info2='jugar videojuegos'
                info3='salir con amigos'
                info4='dormir'
              />
              <InfoCard
                subtitle='Idiomas'
                info='Spañol nativo'
                info2='Inglés B2'
              />
              <InfoCard
                subtitle='Cursos afines'
                info='Técnivas de programación y desarrollo'
                info2='modelos y simulación'
                info3='Comunicaciones'
              />
            </div>
          </td>
        </tr>
      </table>
    </div>
  </main>
);

export default Home;
