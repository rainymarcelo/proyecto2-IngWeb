import { CircleImage } from 'components/CircleImage';
import { InfoCard } from 'components/InfoCard';
import { InfoLink } from 'components/InfoLink';
import { IntroductionText } from 'components/IntroductionText';
import { NameText } from 'components/NameText';
import React from 'react';

const Home = () => (
  <main>
    <div className='bg-gradient-to-br from-black to-red-700'>
      <div>
        <CircleImage />
      </div>
      <NameText>Marcelo De la hoz sierra</NameText>
    </div>
    <IntroductionText>
      Soy estudiante de ingeniería de sistemas de séptimo semestre en la
      universidad de Antioquia, tengo 23 años y en este momento vivo en
      Medellín.
    </IntroductionText>
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
        info3='Data science'
        info4='IA'
      />
      <InfoCard
        subtitle='Hobbies'
        info='Leer libros y comics'
        info2='Jugar videojuegos'
        info3='Salir con amigos'
        info4='Dormir'
      />
      <InfoCard subtitle='Idiomas' info='Español nativo' info2='Inglés B2' />
      <InfoCard
        subtitle='Cursos afines'
        info='Técnivas de programación y desarrollo'
        info2='Modelos y simulación'
        info3='Comunicaciones'
      />
    </div>
    <footer className='bg-gradient-to-br from-black to-red-700 flex h-52'>
      <table>
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
    </footer>
  </main>
);

export default Home;
