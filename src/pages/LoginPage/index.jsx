import React, { useEffect } from 'react';
import FormLogin from '../../components/Forms/FormLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../../store/auth/thunks';
import { toast } from 'react-hot-toast';
const LoginPage = () => {
  const dispatch = useDispatch();

  // const error = useSelector(state => state.root.error);

  const login = newUser => {
    dispatch(loginThunk(newUser))
      .unwrap()
      .then(() => {
        toast.success('Success! You are logged in!');
      })
      .catch(error => {
        // console.log(error);
        return toast.error(
          // error.message
          'Error! Check your email or password!'
        );
      });
  };

  return <FormLogin login={login} />;
};

export default LoginPage;
