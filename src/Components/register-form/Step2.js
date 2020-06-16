import React, {Component} from 'react';

class Step2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 2) {
      return null
    }

    return(
      <>
      <div className="form-group all-sections d-flex flex-column align-items-center">
        <div className='d-flex mb-5'>
          <div className='d-flex flex-column mx-5'>
            <label className='form-field' htmlFor="has-a-job">Está empregado atualmente?*</label>
            <div className="form-options d-flex">
              <input
                className="form-control"
                id="employed"
                name="employed"
                type="radio"
                value="employed"
                checked
              />
              <label htmlFor="employed">Sim</label>
              <input
                className="form-control"
                id="not-employed"
                name="employed"
                type="radio"
                value="not-employed"
              />
              <label htmlFor="not-employed">Não</label>
            </div>
          </div>
          <div className='d-flex flex-column mr-4'>
            <label className='form-field'  htmlFor="salary">Pretensão Salarial*</label>
            <input
              className="form-control"
              id="salary"
              name="salary"
              type="text"
              required
            />
          </div>
        </div>
        <div className="checkboxes d-flex">
          <div className='d-flex mb-3'>
            <div className='d-flex flex-column mr-4'>
              <label className='form-field'  htmlFor="interested-area">Áreas de interesse*</label>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="industria"
                  name="industria"
                  type="checkbox"
                  value="industria"
                />
                <label htmlFor="industria" className='ml-2'>Indústria</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="saude"
                  name="saude"
                  type="checkbox"
                  value="saude"
                />
                <label htmlFor="saude" className='ml-2'>Saúde</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="cosmeticos"
                  name="cosmeticos"
                  type="checkbox"
                  value="cosmeticos"
                />
                <label htmlFor="cosmeticos" className='ml-2'>Cosméticos</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="moda"
                  name="moda"
                  type="checkbox"
                  value="moda"
                />
                <label htmlFor="moda" className='ml-2'>Moda</label>
              </div>
            <div className="form-options d-flex justify-content-start align-items-baseline">
              <input
                id="servicos"
                name="servicos"
                type="checkbox"
                value="servicos"
              />
              <label htmlFor="servicos" className='ml-2'>Serviços</label>
            </div>
            <div className="form-options d-flex justify-content-start align-items-baseline">
              <input
                id="financeiro"
                name="financeiro"
                type="checkbox"
                value="financeiro"
              />
              <label htmlFor="financeiro" className='ml-2'>Financeiro</label>
            </div>
            <div className="form-options d-flex justify-content-start align-items-baseline">
              <input
                id="imobiliario"
                name="imobiliario"
                type="checkbox"
                value="imobiliario"
              />
              <label htmlFor="imobiliario" className='ml-2'>Imobiliário</label>
            </div>
            <div className="form-options d-flex justify-content-start align-items-baseline">
              <input
                id="tecnologia"
                name="tecnologia"
                type="checkbox"
                value="tecnologia"
              />
              <label htmlFor="tecnologia" className='ml-2'>Tecnologia</label>
            </div>
            </div>
          </div>
          <div className='d-flex mb-3'>
            <div className='d-flex flex-column mr-4'>
              <label className='form-field'  htmlFor="interested-sector">Setores de interesse*</label>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="logistica"
                  name="logistica"
                  type="checkbox"
                  value="logistica"
                />
                <label htmlFor="logistica" className='ml-2'>Logística</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="comercial"
                  name="comercial"
                  type="checkbox"
                  value="comercial"
                />
                <label htmlFor="comercial" className='ml-2'>Comercial</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="financeiro"
                  name="financeiro"
                  type="checkbox"
                  value="financeiro"
                />
                <label htmlFor="financeiro" className='ml-2'>Financeiro</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="tecnologia"
                  name="tecnologia"
                  type="checkbox"
                  value="tecnologia"
                />
                <label htmlFor="tecnologia" className='ml-2'>Tecnologia</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="rh"
                  name="rh"
                  type="checkbox"
                  value="rh"
                />
                <label htmlFor="rh" className='ml-2'>RH</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="processos"
                  name="processos"
                  type="checkbox"
                  value="processos"
                />
                <label htmlFor="processos" className='ml-2'>Processos</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="projetos"
                  name="projetos"
                  type="checkbox"
                  value="projetos"
                />
                <label htmlFor="projetos" className='ml-2'>Projetos</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="operacoes"
                  name="operacoes"
                  type="checkbox"
                  value="operacoes"
                />
                <label htmlFor="operacoes" className='ml-2'>Operações</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="juridico"
                  name="juridico"
                  type="checkbox"
                  value="juridico"
                />
                <label htmlFor="juridico" className='ml-2'>Jurídico</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="administrativo"
                  name="administrativo"
                  type="checkbox"
                  value="administrativo"
                />
                <label htmlFor="administrativo" className='ml-2'>Administrativo</label>
              </div>
              <div className="form-options d-flex justify-content-start align-items-baseline">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  value="marketing"
                />
                <label htmlFor="marketing" className='ml-2'>Marketing</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Step2;
