import React from 'react';
import Dropdown from './dropdown/dropdown';
import MobileDropdown from './mobile_dropdown/mobile_dropdown';
import { isMobileDevice } from './utils';

const DropdownWrapper = (props) => {
  if (!isMobileDevice()) {
    return <Dropdown {...props} />;
  }

  return <MobileDropdown {...props} />;
};

export default DropdownWrapper;
