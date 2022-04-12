import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../components/common/button/Button';

storiesOf('Button', module)
  .add('btn like', () => (
    <Button
      btnClass="btn"
      btnBackground="transparent"
      textColor="#8F8F8F"
      text={<i className="fa fa-thumbs-up"></i>}
      btnFontSize='20'
    />
  ))
  .add('btn dislike', () => (
    <Button
      btnClass="btn"
      btnBackground="transparent"
      textColor="#8F8F8F"
      text={<i className="fa fa-thumbs-down"></i>}
      btnFontSize='20'
    />
  ))
  .add('btn search', () => (
    <Button
      btnClass="btn btn-outline-secondary"
      text={<i className="fa fa-search"></i>}
      textColor="gray"
      borderRadius="0"
      borderColor="#CCD3D9"
      hoverBgColor="#d9d9d9"
      handleClick={() => alert('Search button')}
    />
  ));
