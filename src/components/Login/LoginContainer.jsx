import { connect } from "react-redux";
import Login from "./Login";
import {setUser} from "../../redux/auth-reducer"

let mapStateToProps = (state) => {
  return {
    isAuth: state.authInfo.isAuth,
    login: state.authInfo.login,
    token: state.authInfo.token,
  }
}

const LoginContainer = connect(mapStateToProps, {setUser})(Login);



export default LoginContainer;