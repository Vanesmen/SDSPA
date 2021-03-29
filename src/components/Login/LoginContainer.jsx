import { connect } from "react-redux";
import Login from "./Login";
import {setUser} from "../../redux/auth-reducer";
import {setFavoriteList} from "../../redux/favorites-reducer";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authInfo.isAuth,
    login: state.authInfo.login,
    token: state.authInfo.token,
  }
}

const LoginContainer = connect(mapStateToProps, {setUser, setFavoriteList})(Login);



export default LoginContainer;