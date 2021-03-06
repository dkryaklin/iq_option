import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown';
import { countries } from './countries';
import './index.styl';

ReactDOM.render(
  <Dropdown
    onChange={item => console.log('selected item is', item)}
    items={countries.map(i => i.name)}
    title="Выберете страну"
  />,
  document.getElementById('root'),
);
