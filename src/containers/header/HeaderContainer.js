import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import { Creators } from '../../actions/video';
import {Creators as CreatorsLogin }  from '../../actions/login';
import { withRouter } from 'react-router';

const mapStateToProps = state => {

  const { login, user } = state;

  return {
    login: login,
    user: user
  };
};

const mapDispatchToProps = {
  searchVideo: Creators.searchVideo,
  loginRequest: CreatorsLogin.loginRequest,
  logoutRequest: CreatorsLogin.logoutRequest
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default withRouter(HeaderContainer);