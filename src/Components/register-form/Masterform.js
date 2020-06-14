import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './Masterform.css';


class MasterForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentStep: 1,
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(event) {
    const { value } = event.target;
    this.setState({
      currentStep: Number(value),
    });
  }

  render() {
    return(
      <>
        <hr className='m-0 green-bar'></hr>
        <div className="master-form py-5">
          <div className="d-flex justify-content-center align-items-start flex-column">
            <h2 className="all-titles d-flex flex-column align-items-start"><span>SEU </span><span>CADASTRO</span></h2>
            <p className='all-text form-text'>Agora é o momento de preencher todas as suas informações!</p>
            <p className='all-text form-text'>Desse modo, te guiaremos da melhor forma para encontrarmos as melhores vagas pra <b>você</b>.</p>
          </div>

          <form className="my-5">
            <div className='form-steps'>
              <Step1 currentStep={this.state.currentStep} />
              <Step2 currentStep={this.state.currentStep} />
              <Step3 currentStep={this.state.currentStep} />
              <Step4 currentStep={this.state.currentStep} />
            </div>
            <button className="btn btn-pagination" type="button" value={1} onClick={this.goToPage}>1</button>
            <button className="btn btn-pagination" type="button" value={2} onClick={this.goToPage}>2</button>
            <button className="btn btn-pagination" type="button" value={3} onClick={this.goToPage}>3</button>
            <button className="btn btn-pagination" type="button" value={4} onClick={this.goToPage}>4</button>
          </form>
        </div>
      </>
    )
  }
}

export default MasterForm;