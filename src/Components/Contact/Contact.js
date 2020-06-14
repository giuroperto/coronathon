import React from 'react';
import './Contact.css';

const Contact =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='contact-page'>
        <div className ='contact-info d-flex flex-column align-items-start'>
          <h2 className='all-titles'>CONTATO</h2>
          <p className='all-text'>Em caso de dúvidas, sugestões ou reclamações, entre em contato conosco!</p>
        </div>
        <div className="container my-5">
          <section className="contact-section dark-grey-text mb-5">
            <div className="card">
              <div className="row">
                <div className="col-lg-8">
                  <div className="card-body form">
                    <h3 className="font-weight-bold dark-grey-text mt-4"><i className="fas fa-envelope pr-2 mr-1"></i>Escreva para a gente:</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="form-contact-name" className="form-control" />
                          <label for="form-contact-name" className="">Nome</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input type="text" id="form-contact-email" className="form-control" />
                          <label for="form-contact-email" className="">E-mail</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div>
                        <input type="text" id="form-contact-subject" className="form-control" />
                          <label for="form-contact-subject" className="">Assunto</label>
                      </div>

                    </div>

                    <div className="row">

                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <textarea id="form-contact-message" className="form-control md-textarea" rows="3"></textarea>
                          <label for="form-contact-message">Mensagem</label>
                          <a className="btn-floating btn-lg blue">
                            <i className="far fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="col-lg-4">

                  <div className="card-body contact text-center h-100 white-text">

                    <h3 className="font-weight-bold my-4 pb-2">Informações para Contato</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>Ligue para nossa central:<span> 158</span></p>
                      </li>
                      <li>
                        <p>Localize a rede de atendimento mais perto de você:</p>
                        <a href='http://trabalho.gov.br/rede-de-atendimento'>http://trabalho.gov.br/rede-de-atendimento</a>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </section>


        </div>
      </div>
    </>
  )
}

export default Contact;
