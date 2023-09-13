import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  return (
    <div className="text-center">
      <h1>LoginPage</h1>
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  setIsAuth: PropTypes.func,
};

export default LoginPage;
