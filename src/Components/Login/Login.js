import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login =  () => {
  return (
    <>
      <hr className='green-bar m-0'></hr>
      <div className='login-page'>
        <div className="login-bg pt-5 d-flex flex-column">
          <div className='pt-3'>
            <h2 className='login-title pb-4'>LOGIN</h2>
            <p className='login-text pb-4'>Caso já tenha cadastro, insira suas informações abaixo.</p>
          </div>
          <form>
            <div className='mb-3 d-flex flex-column align-items-center'>
              <label className='form-fields' htmlFor="email">E-mail</label>
              <input className='input-width' type="text" id="email" />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <label className='form-fields' htmlFor="password">Senha</label>
              <input className='input-width' type="password" id="password" />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <Link>Esqueceu sua senha?</Link>
              <Link to='/perfil'><button className='my-4 login-button'>ENTRAR</button></Link>
            </div>
          </form>
          <div className='d-flex flex-column'>
            <p className='m-0'>Ainda não é cadastrado?</p>
            <Link to='/cadastrar'>Cadastre-se já!</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;