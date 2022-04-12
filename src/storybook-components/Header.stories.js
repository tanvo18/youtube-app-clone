import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';

storiesOf('Header', module)
  .add('header', () => (
    <Router>
      <Header />
    </Router>
  ));
