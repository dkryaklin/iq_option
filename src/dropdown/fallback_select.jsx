import React from 'react';
import PropTypes from 'prop-types';
import clssnms from 'clssnms';

const classNames = clssnms('dropdown');

const FallbackSelect = ({ onChange, items }) => {
  const fallbackItems = [...items];
  fallbackItems.unshift('');

  return (
    <select
      className={classNames('fallback-select')}
      onChange={event => onChange(event.target.value)}
    >
      {fallbackItems.map(item => <option key={item}>{item}</option>)}
    </select>
  );
};

FallbackSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
};

FallbackSelect.defaultProps = {
  items: [],
};

FallbackSelect.displayName = 'fallback_select';

export default FallbackSelect;
