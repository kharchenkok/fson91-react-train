import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, profileSelector } from '../../store/auth/authSelectors';
import { logOut } from '../../store/auth/authSlice';
import { removeToken } from '../../api/auth';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const isProfile = useSelector(profileSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isAuth) {
      dispatch(logOut());
      removeToken();
    } else {
      navigate('/login');
    }
  };
  const handleProfile = () => {
    navigate('/profile');
  };
  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
      </div>
      {isProfile && (
        <h4
          onClick={handleProfile}
          className="navbar-brand mb-0 h1 text-success"
        >
          {isProfile.firstName}
        </h4>
      )}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/todo">
              Todo
            </NavLink>
          </li>
          {/*<li className="nav-item">*/}
          {/*  <NavLink className="nav-link text-white" to="/posts">*/}
          {/*    Posts*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          <li className="nav-item">
            <button
              className="nav-link text-white btn btn-dark"
              type={'button'}
              onClick={handleClick}
            >
              {isAuth ? 'LogOut' : 'LogIn'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
