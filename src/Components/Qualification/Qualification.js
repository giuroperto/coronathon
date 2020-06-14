import React from 'react';
import './Qualification.css';

const Qualification =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='quali-page'>
        <h2 className='all-titles title-size mb-5'>SUAS INDICAÇÕES</h2>
        <div className='all-cards d-flex flex-column align-items-center'>
          <div className="cards-top d-flex mb-5 mt-3">
            <div className="quali-card d-flex">
              <div className="green-ball mr-3"></div>
              <div className="quali-topics d-flex flex-column align-items-start">
                <h4 className='quali-text quali-title'>Microsoft Word</h4>
                <p className='quali-text quali-course m-0'>Digital Innovation One</p>
                <a href='https://web.digitalinnovation.one/home' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://web.digitalinnovation.one/home)</p></a>
                <p className='quali-text quali-course m-0'>Brasil Mais Digital</p>
                <a href='http://www.brasilmaisdigital.org.br/index.php/pt-br/' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(http://www.brasilmaisdigital.org.br/index.php/pt-br/)</p></a>
              </div>
            </div>
            <div className="quali-card d-flex">
              <div className="green-ball mr-3"></div>
              <div className="quali-topics d-flex flex-column align-items-start">
                <h4 className='quali-text quali-title'>Comunicação e Oratória</h4>
                <p className='quali-text quali-course m-0'>FGV Online</p>
                <a href='https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/introducao-comunicacao-na-era-digital' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/introducao-comunicacao-na-era-digital)</p></a>
                <p className='quali-text quali-course m-0'>Udemy</p>
                <a href='https://www.udemy.com/courses/business/communications/' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://www.udemy.com/courses/business/communications/)</p></a>
              </div>
            </div>
          </div>
          <div className="cards-bottom d-flex">
            <div className="quali-card d-flex">
              <div className="green-ball mr-3"></div>
              <div className="quali-topics d-flex flex-column align-items-start">
                <h4 className='quali-text quali-title'>Microsoft Excel</h4>
                <p className='quali-text quali-course m-0'>Digital Innovation One</p>
                <a href='https://web.digitalinnovation.one/home' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://web.digitalinnovation.one/home)</p></a>
                <p className='quali-text quali-course m-0'>Brasil Mais Digital</p>
                <a href='http://www.brasilmaisdigital.org.br/index.php/pt-br/' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(http://www.brasilmaisdigital.org.br/index.php/pt-br/)</p></a>
              </div>
            </div>
            <div className="quali-card d-flex">
              <div className="green-ball mr-3"></div>
              <div className="quali-topics d-flex flex-column align-items-start">
                <h4 className='quali-text quali-title'>Ferramentas de Gestão</h4>
                <p className='quali-text quali-course m-0'>Voitto - Agile</p>
                <a href='https://www.voitto.com.br/digital/introducao-agile-scrum' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://www.voitto.com.br/digital/introducao-agile-scrum)</p></a>
                <p className='quali-text quali-course m-0'>Portal GSTI</p>
                <a href='https://www.portalgsti.com.br/pmbok/cursos/' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://www.portalgsti.com.br/pmbok/cursos/)</p></a>
                <p className='quali-text quali-course m-0'>Respostas para o amanhã</p>
                <a href='https://respostasparaoamanha.com.br/cursos/aprender-projeto/inicio' target='_blank' rel="noopener noreferrer"><p className='quali-text quali-link m-0'>(https://respostasparaoamanha.com.br/cursos/aprender-projeto/inicio)</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qualification;

