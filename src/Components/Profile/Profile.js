import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='profile-page d-flex'>
        <div className="profile-header">
          <h2 className='profile-title m-5'>SEU PAINEL</h2>
        </div>
        <div className="profile-infos">
          <div className="personal-info mb-5">
            <p className='white-text m-0 lg-txt'>Maria Cláudia de Souza Fernandes</p>
            <p className='white-text lg-txt'>Auxiliar Administrativo</p>
          </div>
          <div className="main-section-profile d-flex flex-column align-items-center">
            <div className="profile-graphics d-flex mb-3">
              <div className="competencies profile-card mr-4">
                <p className='white-text rgl-txt'>Ferramentas e competências mais requisitadas para a ocupação almejada:</p>
                <img className='profile-img' src="https://res.cloudinary.com/dxatyucj2/image/upload/v1592167989/WhatsApp_Image_2020-06-14_at_15.55.26_1_cqjsqj.jpg" alt="Ferramentas e competências mais requisitadas para a ocupação desejada"/>
              </div>
              <div className="habilities profile-card">
                <p className='white-text rgl-txt'>No geral, os contratados na área
                possuem as seguintes habilidades:</p>
                <img className='profile-img' src="https://res.cloudinary.com/dxatyucj2/image/upload/v1592167986/WhatsApp_Image_2020-06-14_at_15.55.26_viqf6i.jpg" alt="Gráfico resumo das habilidades requisitadas para a área"/>
              </div>
            </div>
            <p className='white-text smlr-txt txt-width'>Quer ver mais? Em breve disponibilizaremos mais tabelas e panéis exclusivos!</p>
          </div>
          <div className="profile-suggestions d-flex mt-5 justify-content-center mb-2">
            <p className='white-text rgl-txt txt-width'>Aqui estão as principais habilidades e ferramentas necessárias para você se destacar ainda mais!</p>
            <ul>
              <li className='white-text rgl-txt'>Microsoft Word</li>
              <li className='white-text rgl-txt'>Comunicação e Oratória</li>
              <li className='white-text rgl-txt'>Microsoft Excel</li>
              <li className='white-text rgl-txt'>Ferramentas de Gestão</li>
            </ul>
          </div>
          <div className="profile-education mt-5 d-flex flex-column align-items-center">
            <div className="profile-text">
              <p className='white-text m-0 sml-txt'>Não sabe por onde começar?</p>
              <p className='white-text mb-3 sml-txt'>Veja nossas principais indicações pra você!</p>
            </div>
            <Link to='/coronathon/indicacoes'><button className='btn btn-style ml-5'>Quero me qualificar</button></Link>
          </div>


        </div>
      </div>
    </>
  )
}

export default Profile;