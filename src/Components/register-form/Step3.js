import React, {Component} from 'react';

class Step3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null
    }

    return(
      <>
      <div className="form-group all-sections d-flex flex-column">
        <div className='section-1 d-flex'>
          <div className='d-flex flex-column'>
            <label htmlFor="name">Nome Completo*</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="birth">Data de Nascimento*</label>
            <input
              className="form-control"
              id="birth"
              name="birth"
              type="date"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="cpf">CPF*</label>
            <input
              className="form-control"
              id="cpf"
              name="cpf"
              type="number"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="cpf">RG*</label>
            <input
              className="form-control"
              id="rg"
              name="rg"
              type="number"
              required
            />
          </div>
        </div>
        <div>
          <div className='d-flex flex-column'>
            <label htmlFor="email">E-mail*</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <label htmlFor="cep">CEP*</label>
            <input
              className="form-control"
              id="cep"
              name="cep"
              type="number"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="address">Endereço*</label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="text"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="complemento">Complemento</label>
            <input
              className="form-control"
              id="complemento"
              name="complemento"
              type="text"
            />
          </div>
        </div>
        <div className='d-flex'>
          <div className='d-flex flex-column'>
            <label htmlFor="nationality">Nacionalidade*</label>
            <input
              className="form-control"
              id="nationality"
              name="nationality"
              type="text"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="state">Estado*</label>
            <input
              className="form-control"
              id="state"
              name="state"
              type="text"
              required
            />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="city">Cidade*</label>
            <input
              className="form-control"
              id="city"
              name="city"
              type="text"
              required
            />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Step3;