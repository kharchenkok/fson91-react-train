// import { useEffect, useState } from 'react';
import styles from './SignupForm.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function SignupForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// export default class SignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

// handleChange = evt => {
//   const { name, value } = evt.target;
//   this.setState({ [name]: value });
// };

//   render() {
//     return (
//       <form style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label style={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
