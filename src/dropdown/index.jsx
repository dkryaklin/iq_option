import React from 'react';
import Dropdown from './dropdown';

class DropdownIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      error: '',
    };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <div>Component with error</div>;
    }

    return <Dropdown {...this.props} />;
  }
}

export default DropdownIndex;
