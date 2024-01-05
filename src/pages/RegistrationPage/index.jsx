import FormRegistration from '../../components/Forms/FormRegistration';

import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../store/auth/thunks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = newUser => {
    dispatch(registerThunk(newUser));
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <FormRegistration register={register} />;
};

export default RegistrationPage;
