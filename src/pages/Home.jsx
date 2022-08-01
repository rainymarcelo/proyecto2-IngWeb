import React from 'react';

const Home = () => (
  <main>
    <div>
      <table className='table-fixed w-full h-screen'>
        <tr>
          <td className='bg-gradient-to-br from-black to-red-700  w-1/3'>
            <div className='w-300px'>
              <img
                className='object-contain rounded-full mx-auto'
                src='FotoMarcelo.jpg'
                alt='Foto marcelo de la hoz'
              />
            </div>
            <h1 className='text-white text-2xl font-bold text-center'>
              Marcelo De la hoz Sierra
            </h1>
            <div>
              <table className='my-4'>
                <tr>
                  <td className='w-1/4'>
                    <div className='my-4 y-25px'>
                      <img
                        className='object w-1/2 mx-2'
                        src='GmailLogo.webp'
                        alt='gmail logo'
                      />
                    </div>
                  </td>
                  <td>
                    <a
                      className='text-white text-center'
                      href='https://mail.google.com/mail/u/0/?tab=wm#inbox'
                    >
                      marcelo.delahozs@udea.edu.co
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='w-1/4'>
                    <div className='my-4 y-25px'>
                      <img
                        className='object w-1/2 mx-2'
                        src='Githublogo.png'
                        alt='github logo'
                      />
                    </div>
                  </td>
                  <td>
                    <a
                      className='text-white text-center'
                      href='https://github.com/rainymarcelo'
                    >
                      rainymarcelo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='w-1/4'>
                    <div className='my-4 y-25px'>
                      <img
                        className='object w-1/2 mx-2'
                        src='LinkedinLogo.png'
                        alt='linkedin logo'
                      />
                    </div>
                  </td>
                  <td>
                    <a
                      className='text-white text-center'
                      href='https://www.linkedin.com/in/marcelo-de-la-hoz-86434b242/'
                    >
                      Marcelo De la Hoz
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td>aqui va la info</td>
        </tr>
      </table>
    </div>
  </main>
);

export default Home;
