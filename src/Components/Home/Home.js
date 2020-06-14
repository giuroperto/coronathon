import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home =  () => {
  return (
    <>
      <div className='home-page d-flex flex-column justify-content-center'>
        <div className='home-info'>
          <h1 className='text-bold home-title'>EMPREGA BRASIL</h1>
          <p className='home-text'>O sine.com.br acabou. Com isso, nasceu o Trabalha Brasil. Entre no maior portal de empregos do país!</p>
        </div>
        <div className="home-buttons">
          <Link to='/coronathon/cadastrar'><button className='btn btn-style'>SOU TRABALHADOR</button></Link>
          <a href='https://empregabrasil.mte.gov.br/' target='_blank'><button className='btn btn-style'>SOU EMPREGADOR</button></a>
        </div>
      </div>
    </>
  )
}

export default Home;