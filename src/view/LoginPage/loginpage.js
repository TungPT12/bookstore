import LoginForm from '../../components/LoginForm/login'
import SignUpForm from '../../components/SignUp/signup'
import '../../style/general.css';
import './loginpage.css';
import { Link } from "react-router-dom";

function LoginPage() {
  return (
      <div className="content-wrap__login">
        <div className="main-content full-width no-borders login-page">
          <div className="metrics_data_container flex-row">
            <LoginForm />
            <SignUpForm />
          </div>
          <div className="block-wrap half"></div>
        </div>
      </div>
  )
}

export default LoginPage
