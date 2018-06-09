import React from 'react';
import clssnms from 'clssnms';
import './dropdown.styl';

const classNames = clssnms('dropdown');

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      test: 1,
    };
  }

  state = {
    test: true,
  }

  onFocusHandler = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className={classNames()}>
        <div className={classNames('select')}>
          <input className={classNames('input')} onFocus={this.onFocusHandler} type="text" />
          <div className={classNames('placeholder', { '--fix': true })}>Выберете страну</div>
          <div className={classNames('expander')}>
            <div className={classNames('trangle')} />
          </div>
        </div>
        <div className={classNames('list')}>
          <div className={classNames('item')}>Text1</div>
          <div className={classNames('item')}>Text1</div>
          <div className={classNames('item')}>Text1</div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
