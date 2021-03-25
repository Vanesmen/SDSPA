import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import HeaderComponent from './components/Header/HeaderComponent';
import SearchContainer from './components/Search/SearchContainer';
import LoginContainer from "./components/Login/LoginContainer";
import FavoritesListContainer from "./components/FavoritesList/FavoritesListContainer"
import { compose } from 'redux';

const { Content, Footer } = Layout;


function App() {
  return (
    <Layout className="layout" style={{ "minHeight": '100vh' }}>
      <HeaderComponent/>
      
      <Content style={{ padding: '0 50px' }}>
        <Route path="/search" render={() => <SearchContainer/>}/>
        <Route path="/login" render={() => <LoginContainer/>}/>
        <Route path="/favorites" render={() => <FavoritesListContainer/>}/>
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>SPA for Sibdev by Gusev Ivan</Footer>
  </Layout>
  )
}

let AppContainter = compose(
  withRouter
)(App)

export default AppContainter;
