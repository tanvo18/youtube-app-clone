import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToPropsAuthented = state => {
  const { isSignedIn } = state.login;

  return {
    authenticated: isSignedIn
  };
};

const RequireAuth = (WrappedComponent, mapStateToProps = mapStateToPropsAuthented) => {
  class PoliciedComponent extends Component {
    componentWillMount() {
      if (!this.props.authenticated)
        this.props.history.push('/');
    }
    componentWillUpdate() {
      if (!this.props.authenticated)
        this.props.history.push('/');
    }
    render() {
      return (
        <WrappedComponent { ...this.props } />
      );
    }
  }

  return connect(mapStateToProps)(PoliciedComponent);
};

export default RequireAuth;