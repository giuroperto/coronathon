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
      <div className="form-group all-sections section-3">
        <h2 className='mb-4'>Última Experiência Profissional</h2>
        <div className='form-row mb-3'>
          <div className='form-group col-md-6'>
            <label className='form-field' htmlFor="company">Empresa*</label>
            <input
              className='form-control'
              id="company"
              name="company"
              type="text"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="start-date">Data Inicial*</label>
            <input
              className='form-control'
              id="start-date"
              name="start-date"
              type="date"
              required
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='form-field'  htmlFor="end-date">Data Final*</label>
            <input
              className='form-control'
              id="end-date"
              name="end-date"
              type="date"
              required
            />
          </div>
        </div>
        <div className='form-row mb-3'>
          <div className='form-group col-md-6'>
            <label className='form-field'  htmlFor="company-sector">Setor da Empresa*</label>
            <select
              id="company-sector"
              className='form-control'
              name="company-sector"
              required>
              <option selected>Choose...</option>
              <option value="varejo-alimentos">Varejo de Alimentos</option>
              <option value="alimentos-bebidas">Alimentos e Bebidas</option>
              <option value="industria">Indústria</option>
              <option value="saude">Saúde</option>
              <option value="cosmeticos">Cosméticos</option>
              <option value="moda">Moda</option>
              <option value="atacado-varejo">Atacado e Varejo</option>
              <option value="varejo-automotivo">Varejo Automotivo</option>
              <option value="servicos-automotivos">Serviços Automotivos</option>
              <option value="servicos">Serviços</option>
              <option value="financeiro">Financeiro</option>
              <option value="imobiliario">Imobiliário</option>
              <option value="tecnologia">Tecnologia</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <label className='form-field'  htmlFor="occupation">Função*</label>
            <input
              className='form-control'
              id="occupation"
              name="occupation"
              type="text"
              required
            />
          </div>
        </div>
        <div className='form-row mb-3'>
          <div className='form-group mr-4 col-md-12'>
            <label className='form-field'  htmlFor="activities">Atividades*</label>
            <textarea
              className='form-control'
              id="activities"
              name="activities"
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group mr-4 col-md-12'>
            <label className='form-field'  htmlFor="tools">Ferramentas e Plataformas Utilizadas</label>
            <textarea
              className='form-control'
              id="tools"
              name="tools"
            />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Step3;