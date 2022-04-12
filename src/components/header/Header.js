import React, { Component } from 'react';
import logoImg from '../../assets/images/youtube.png';
import Logo from '../common/logo/Logo';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import HeaderStyled from './HeaderStyled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { calRem } from '../../themes/mixins';

class Header extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  /**
   * Set input ref
   */
  setInputRef = (element) => {
    this.inputRef = element;
  }

  /**
   * Handle key press on search bar
   */
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Redirect to search
      this.props.history.push('/search');

      // Search video
      this.props.searchVideo(this.inputRef.value);
    }
  }

  handleAuthClick = () => {
    this.props.loginRequest();
  }

  handleSignoutClick = () => {
    this.props.logoutRequest();
  }

  render() {
    const { login, user } = this.props;

    return (
      <HeaderStyled className="container-fluid">
        <Logo
          link="/"
          logoClass="logo"
          logoImg={logoImg}
          logoWidth='80'
          logoHeight='64'
        />
        <div className="search-wrap">
          <Input
            inputType="text"
            placeHolder="Search"
            inputRef={this.setInputRef}
            borderRadius="0"
            inputWidth="100%"
            inputHeight={`${calRem(38)}`}
            handleKeyDown={this.handleKeyDown}
          />

          <div className="input-group-append">
            <Link
              to={'/search'}
            >
              <Button
                btnClass="btn"
                text={<i className="fa fa-search"></i>}
                borderRadius="0"
                borderColor="#ccd3d9"
                hoverBgColor="#d9d9d9"
                textColor='gray'
                handleClick={() => this.props.searchVideo(this.inputRef.value)}
              />
            </Link>
          </div>
        </div>

        <div className="login-btn-wrap">
          <div>
            {login.isSignedIn
              ? <div>
                <div className="user-info dropdown">
                  <button className="btn-avatar dropdown-toggle" data-toggle="dropdown">
                    <img src={user.user.picture} alt="" />
                  </button>

                  <div className="dropdown-menu">
                    <Link
                      to={'/playlist'}
                      className="dropdown-item"
                    >
                      Playlist
                    </Link>
                    <Link
                      to={'/upload-video'}
                      className="dropdown-item"
                    >
                      Upload video
                    </Link>
                    <Link
                      to={'/'}
                      className="dropdown-item logout-link"
                      onClick={this.handleSignoutClick}
                    >
                      Logout
                    </Link>
                  </div>
                </div>

              </div>
              : <Button
                btnClass="btn btn-login"
                text="SIGN IN"
                btnBackground="transparent"
                textColor="#0194E1"
                handleClick={this.handleAuthClick}
              />
            }
          </div>
        </div>
      </HeaderStyled>
    );
  }
};

Header.defaultProps = {
  login: {},
  user: {},
  searchVideo: () => { },
  loginRequest: () => { },
  logoutRequest: () => { },
};

Header.propTypes = {
  login: PropTypes.object,
  user: PropTypes.object,
  searchVideo: PropTypes.func,
  loginRequest: PropTypes.func,
  logoutRequest: PropTypes.func,
};

export default Header;
