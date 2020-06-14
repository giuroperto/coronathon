import React from 'react';
import './Contact.css';

const Contact =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='contact-page pb-5'>
        <div className ='contact-info d-flex flex-column align-items-start'>
          <h2 className='all-titles'>CONTATO</h2>
          <p className='all-text'>Em caso de dúvidas, sugestões ou reclamações, entre em contato conosco!</p>
        </div>
        <div className="container my-3">
          <section className="contact-section dark-grey-text mb-5">
            <div className="card">
              <div className="row">
                <div className="col-lg-8">
                  <div className="card-body form">
                    <h3 className="font-weight-bold dark-grey-text mt-4 mb-3"><i className="fas fa-envelope pr-2 mr-1"></i>Escreva para a gente:</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-2">
                          <label for="form-contact-name" className="field-name">Nome</label>
                          <input type="text" id="form-contact-name" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="md-form mb-2">
                          <label for="form-contact-email" className="field-name">E-mail</label>
                          <input type="text" id="form-contact-email" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-2">
                          <label for="form-contact-subject" className="field-name">Assunto</label>
                          <input type="text" id="form-contact-subject" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-2">
                          <label for="form-contact-message" className='field-name'>Mensagem</label>
                          <textarea id="form-contact-message" className="form-control md-textarea" rows="3"></textarea>
                          <a className="btn-floating btn-lg blue">
                            <i className="far fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>

                    </div>
                    <button className='btn btn-style'>ENVIAR</button>
                  </div>

                </div>

                <div className="col-lg-4">

                  <div className="card-body contact text-center h-100 white-text">

                    <h3 className="font-weight-bold my-4 pb-2">Informações para Contato</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>Ligue para nossa central:</p>
                        <div className='telefone'>158</div>
                      </li>
                      <li>
                      <div className='d-flex flex-column align-items-center'>
                        <p>Ou localize a rede de atendimento mais perto de você:</p>
                        <a className='btn btn-style btn-search' href='http://trabalho.gov.br/rede-de-atendimento'>PROCURAR</a>
                      </div>
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
