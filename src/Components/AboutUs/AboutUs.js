import React from 'react';
import './AboutUs.css';

const AboutUs =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='about-page d-flex flex-row'>
        <h2 className='about-title all-titles pt-5'>SOBRE NÓS</h2>
        <div className='about-text pt-5'>
          <div className='about-txt-format'>
            <p className='pt-2'>O nosso propósito é ajudar pessoas que procuram por ocupações no mercado, principalmente as que, devido à pandemia, perderam seu emprego ou estão com dificuldade de se alocar em uma dos diversos setores do mercado de trabalho.</p>
            <p>Deste modo, nosso site foca em apresentar as necessidades de competências dos trabalhadores e como eles podem buscar ajuda. Portanto, aqui você encontrará:</p>
            <ul>
              <li>Simplicidade ao criar seu cadastro de forma intuitiva e de fácil entendimento;</li>
              <li>Um painel personalizado das suas competências atuais e necessárias para maior chance de alocação no mercado; </li>
              <li>Indicações de cursos, mentores e plataformas para qualificação; </li>
              <li>Apresentação de vagas assertivas de acordo com as suas habilidades e competências;</li>
              <li>Garantia que sua candidatura foi apresentada ao empregador de forma objetiva e efetiva.</li>
            </ul>
            <p>Tudo isso contando com um feedback contínuo para o constante aprimoramento da nossa plataforma!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;