// import React from 'react';
// import { Link } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import './Login.css';
// import logo from '../../images/log-c.svg';

// const Login = () => {
//   const { enteredValues, errors, handleChange } = useForm();

//   return (
//     <div className='login__container'>
//       <div className='login__header'>
//         <Link to='/'>
//           <img
//             src={logo}
//             alt='Логотип'
//             className='login__logo'
//           />
//         </Link>

//         <h1 className='login__title'>Рады видеть!</h1>
//       </div>

//       <form className='login__form'>
//         <label className='login__label' htmlFor='email'>E-mail</label>
//         <input
//           className='login__input'
//           type='email'
//           id='email'
//           name='email'
//           required
//           value={enteredValues.email || ''}
//           onChange={handleChange}
//         />
//         <span className='register__error'>{errors.email}</span>
//         <label className='login__label' htmlFor='password'>Пароль</label>
//         <input
//           className='login__input'
//           type='password'
//           id='password'
//           name='password'
//           required
//           value={enteredValues.password || ''}
//           onChange={handleChange}
//         />
//         <span className='register__error'>{errors.password}</span>
//         <Link to="/">
//           <button className='login__button' type='submit'>Войти</button>
//         </Link>
//       </form>
//       <div className='login__bottom'>
//         <span>Ещё не зарегистрированы?</span>
//         <Link to='/signup' className='login__link'>Регистрация</Link>
//       </div>
//     </div>
//   )
// };

// export default Login;





import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/log-c.svg';

function Login() {
  return (
    <div className="register__container">
      <section className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Рады видеть!</h2>
        </>
        <form className="register__form">
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input className="login__input login__input-email" type="email" placeholder="email@yandex.ru" required minLength="2"/>
              <span className="login__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input className="login__input login__input-password" type="password" placeholder="" required />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <div className="login__buttons-block">
            <button  className="register__submit-button" type="submit" name="submit-button" >Войти</button>
            <div className="register__link-block">
              <p className="register__link register__link-text">Ещё не зарегистрированы?</p>
              <Link className="register__link" to="/signup">Регистрация</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;