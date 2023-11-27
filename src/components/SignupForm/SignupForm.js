// import { useEffect, useState } from 'react';
import styles from './SignupForm.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log(`Тип поля ${name} не обрабатывается`);
    }
  };
  // Заміняємо на хук useLocalStorage
  // useEffect(() => {
  //   window.localStorage.setItem('email', email);
  // }, [email]);
  //
  // useEffect(() => {
  //   window.localStorage.setItem('password', password);
  // }, [password]);
  // ============================================================
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  // або;
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState((prev) => ({ ...prev, [name]: value }));
  // };
  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };
//
//   handleChange = (evt) => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };
//
//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>
//
//         <label className={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>
//
//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
//
// export default SignupForm;
