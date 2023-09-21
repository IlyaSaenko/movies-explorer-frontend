// import React from 'react';
// import { Link } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
// import './Register.css';
// import logo from '../../images/log-c.svg';

// const Register = () => {
//   const { enteredValues, errors, handleChange } = useForm();

//   return (
//     <section className='register__container'>
//       <div className='register__header'>
//         <Link to='/'>
//           <img
//             src={logo}
//             alt='Логотип'
//             className='register__logo'
//           />
//         </Link>

//         <h1 className='register__title'>Добро пожаловать!</h1>
//       </div>

//       <form className='register__form'>
//         <label className='register__label' htmlFor='name'>Имя</label>
//         <input
//           className='register__input'
//           type='text'
//           id='name'
//           name='name'
//           minLength={2}
//           required
//           value={enteredValues.name || ''}
//           onChange={handleChange}
//         />
//         <span className='register__error'>{errors.name}</span>
//         <label className='register__label'htmlFor='email'>E-mail</label>
//         <input
//           className='register__input'
//           type='email'
//           id='email'
//           name='email'
//           required
//           value={enteredValues.email || ''}
//           onChange={handleChange}
//         />
//         <span className='register__error'>{errors.email}</span>
//         <label className='register__label' htmlFor='password'>Пароль</label>
//         <input
//           className='register__input'
//           type='password'
//           id='password'
//           name='password'
//           minLength={6}
//           required
//           value={enteredValues.password || ''}
//           onChange={handleChange}
//         />
//         <span className='register__error'>{errors.password}</span>
//         <button className='register__button' type='submit'>Зарегистрироваться</button>
//       </form>
//       <div className='register__bottom'>
//         <span>Уже зарегистрированы?</span>
//         <Link to='/signin' className='register__link'>Войти</Link>
//       </div>

//     </section>
//   )
// };

// export default Register;




import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/log-c.svg';

function Register() {
  return (
    <div className="register__container">
      <section className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </>
        <form className="register__form">
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">Имя</p>
              <input className="register__input register__input-name" type="text" placeholder="Виталий" required minLength="2"/>
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input className="register__input register__input-email" type="email" placeholder="email@yandex.ru" required minLength="2"/>
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input className="register__input register__input-password" type="password" placeholder="" required />
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <div className="register__buttons-block">
            <button  className="register__submit-button" type="submit" name="submit-button">Зарегистрироваться</button>
            <div className="register__link-block">
              <p className="register__link register__link-text">Уже зарегистрированы?</p>
              <Link className="register__link" to="/signin">Войти</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
