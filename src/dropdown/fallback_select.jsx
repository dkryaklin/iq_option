import React from 'react';
import PropTypes from 'prop-types';
import clssnms from 'clssnms';
import { getCounties } from './countries';

const classNames = clssnms('dropdown');
const ALL_COUNTRIES = getCounties('');

const FallbackSelect = (props) => {
  const countries = [...ALL_COUNTRIES];
  countries.unshift({
    code: 'empty',
    name: '',
  });

  return (
    <select
      className={classNames('fallback-select')}
      onChange={event => props.onChange(event.target.value)}
    >
      {countries.map(item => <option key={item.code}>{item.name}</option>)}
    </select>
  );
};

FallbackSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

FallbackSelect.displayName = 'fallback_select';

export default FallbackSelect;
