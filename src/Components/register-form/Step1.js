import React, {Component} from 'react';

class Step1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return(
      <>
      <div className="form-group all-sections">
        <div className='form-row mb-3'>
          <div className='form-group col-md-3'>
            <label className='form-field' htmlFor="name">Nome Completo*</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="birth">Data de Nascimento*</label>
            <input
              className="form-control"
              id="birth"
              name="birth"
              type="date"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="cpf">CPF*</label>
            <input
              className="form-control"
              id="cpf"
              name="cpf"
              type="number"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="cpf">RG*</label>
            <input
              className="form-control"
              id="rg"
              name="rg"
              type="number"
              required
            />
          </div>
        </div>
        <div className='form-row mb-3'>
          <div className='form-group col-md-6'>
            <label className='form-field'  htmlFor="email">E-mail*</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="tel">Telefone</label>
            <input
              className="form-control"
              id="tel"
              name="tel"
              type="tel"
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="impairment">Possui deficiência*</label>
            <select 
              className="form-control"
              id="impairment"
              name="impairment"
              required
              >
              <option selected>Choose...</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </div>
        </div>
        <div className='form-row mb-3'>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="cep">CEP*</label>
            <input
              className="form-control"
              id="cep"
              name="cep"
              type="number"
              required
            />
          </div>
          <div className='form-group col-md-6'>
            <label className='form-field'  htmlFor="address">Endereço*</label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="text"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="complemento">Complemento</label>
            <input
              className="form-control"
              id="complemento"
              name="complemento"
              type="text"
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label className='form-field'  htmlFor="nationality">Nacionalidade*</label>
            <input
              className="form-control"
              id="nationality"
              name="nationality"
              type="text"
              required
            />
          </div>
          <div className='form-group col-md-4'>
            <label className='form-field'  htmlFor="state">Estado*</label>
            <input
              className="form-control"
              id="state"
              name="state"
              type="text"
              required
            />
          </div>
          <div className='form-group col-md-4'>
            <label className='form-field'  htmlFor="city">Cidade*</label>
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

export default Step1;