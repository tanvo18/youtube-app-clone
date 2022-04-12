import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import Detail from '../detail/Detail';
import Playlist from '../playlist/Playlist';
import PlaylistDetail from '../playlist-detail/PlaylistDetail';
import UploadVideo from '../upload-video/UploadVideo';
import NotFound from '../not-found/NotFound';
import HeaderContainer from '../../containers/header/HeaderContainer';
import withRequireAuth from '../../components/common/HOC/withRequireAuth';

const RootRouter = () => (
  <Router>
    <React.Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/search' component={HomePage} />
        <Route path='/watch/:id' component={Detail} />
        <Route path='/playlist' component={withRequireAuth(Playlist)} />
        <Route path='/playlist-detail/:id' component={withRequireAuth(PlaylistDetail)} />
        <Route path='/upload-video' component={withRequireAuth(UploadVideo)} />
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  </Router>
);

export default RootRouter;