import React, { Component } from 'react';
import GridVideoContainer from '../../containers/grid-video//GridVideoContainer';
import HomePageStyled from './HomePageStyled';

class HomePage extends Component {
  render() {

    return (
      <HomePageStyled>
        <GridVideoContainer />
      </HomePageStyled>
    );
  }
}

export default HomePage;
