import React, {Component} from 'react';

class Step4 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 4) {
      return null
    }

    return(
      <>
      <div className="form-group all-sections d-flex flex-column align-items-center">
        <div className='d-flex mb-3'>
            <div className='d-flex flex-column mr-4'>
              <label className='form-field'  htmlFor="habilities">Habilidades*</label>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="analitical"
                  name="analitical"
                  type="checkbox"
                  value="analitical"
                  required
                />
                <label htmlFor="analitical" className='ml-2'>Capacidade Analítica</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="negotiation"
                  name="negotiation"
                  type="checkbox"
                  value="negotiation"
                  required
                />
                <label htmlFor="negotiation" className='ml-2'>Negociação</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="team"
                  name="team"
                  type="checkbox"
                  value="team"
                  required
                />
                <label htmlFor="team" className='ml-2'>Trabalho em Equipe</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="leadership"
                  name="leadership"
                  type="checkbox"
                  value="leadership"
                  required
                />
                <label htmlFor="leadership" className='ml-2'>Liderança</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="organization"
                  name="organization"
                  type="checkbox"
                  value="organization"
                  required
                />
                <label htmlFor="organization" className='ml-2'>Organização</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="flexibility"
                  name="flexibility"
                  type="checkbox"
                  value="flexibility"
                  required
                />
                <label htmlFor="flexibility" className='ml-2'>Flexibilidade</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="criativity"
                  name="criativity"
                  type="checkbox"
                  value="criativity"
                  required
                />
                <label htmlFor="criativity" className='ml-2'>Criatividade</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="planning"
                  name="planning"
                  type="checkbox"
                  value="planning"
                  required
                />
                <label htmlFor="planning" className='ml-2'>Planejamento</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="proactivity"
                  name="proactivity"
                  type="checkbox"
                  value="proactivity"
                  required
                />
                <label htmlFor="proactivity" className='ml-2'>Proatividade</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="produtivity"
                  name="produtivity"
                  type="checkbox"
                  value="produtivity"
                  required
                />
                <label htmlFor="produtivity" className='ml-2'>Produtividade</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="empathy"
                  name="empathy"
                  type="checkbox"
                  value="empathy"
                  required
                />
                <label htmlFor="empathy" className='ml-2'>Empatia</label>
            </div>
          </div>
        </div>
        <button className='btn btn-style mt-5'>SALVAR</button>
      </div>
      </>
    )
  }
}

export default Step4;

//botao de save