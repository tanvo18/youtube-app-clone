import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '../components/common/input/Input';

storiesOf('Input', module)
  .add('input', () => (
    <Input
      inputType="text"
      inputClass="form-control"
      placeHolder="Search"
      borderRadius="0"
    />
  ));
