import React from 'react';
import { Avatar } from 'antd';
import { Layout, Menu } from 'antd';
import Logo from '../common/Logo/Logo';
import { Row } from 'antd';
import { NavLink } from 'react-router-dom';
import {logOut} from '../../redux/auth-reducer';
import { connect } from 'react-redux';

const { Header } = Layout;

const Header1 = (props) => {
    return (
        <Header style={{ "backgroundColor": "#FFFFFF"}}>
        
        
            <Row justify="spaceBetween" align="middle">
              <Avatar shape="square" size={48} icon={<Logo />} style={{ backgroundColor: 'transparent' }}/>
              <Menu theme="light" mode="horizontal" style={{ "marginRight": "auto"}} >              
                <Menu.Item key="1" style={{"cursor" : "pointer"}}><NavLink to="/search" >Поиск</NavLink></Menu.Item>
                <Menu.Item key="2" style={{"cursor" : "pointer"}}><NavLink to="/favorites" >Избранное</NavLink></Menu.Item>
                <Menu.Item key="3" style={{"cursor" : "pointer"}}><NavLink to="/login" onClick={props.logOut}>{props.isAuth ? "Выход" : "Вход"}</NavLink></Menu.Item>
              </Menu>
            </Row>

            
      </Header>
    )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authInfo.isAuth,
  }
}


const HeaderComponent = connect(mapStateToProps, {logOut})(Header1);



export default HeaderComponent