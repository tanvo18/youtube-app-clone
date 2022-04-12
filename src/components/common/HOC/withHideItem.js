import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToPropsAuthented = state => {
  const { isSignedIn } = state.login;

  return {
    authenticated: isSignedIn
  };
};

const withHideItem = (WrappedComponent, mapStateToProps = mapStateToPropsAuthented) => {
  class PoliciedComponent extends Component {
    render() {
      const { authenticated } = this.props;

      return (
        <div>
          {
            authenticated
              ? <WrappedComponent 
                {...this.props}
              />
              : null
          }
        </div>
      );
    }
  };

  return connect(mapStateToProps)(PoliciedComponent);
};

export { withHideItem };
export default withHideItem;
