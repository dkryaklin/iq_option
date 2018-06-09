import React from 'react';
import clssnms from 'clssnms';
import { getCounties } from './countries';
import './dropdown.styl';

const classNames = clssnms('dropdown');

const MAX_ITEMS_AMOUNT = 10;

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      inputValue: '',
      items: getCounties('', MAX_ITEMS_AMOUNT),
    };
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const countries = getCounties(inputValue, MAX_ITEMS_AMOUNT);
    this.setState({ inputValue, items: countries });

    // option with debounce
    // clearTimeout(this.getCountiesDebounce);
    // this.getCountiesDebounce = setTimeout(() => {
    //   this.setState({ items: getCounties(this.state.inputValue, MAX_ITEMS_AMOUNT) });
    // }, 300);
  }

  onFocusHandler = () => {
    this.setState({ isOpen: true });
  }

  onBlurHandler = () => {
    this.setState({ isOpen: false });
  }

  getListItems() {
    const listItems = this.state.items.map((item) => {
      let value = item.name;

      if (this.state.inputValue) {
        value = item.name.toLowerCase().replace(this.state.inputValue, '');
      }

      return (
        <div key={item.code} className={classNames('item')}>
          {this.state.inputValue ? <span>{this.state.inputValue}</span> : null}
          {value}
        </div>
      );
    });

    return listItems;
  }

  render() {
    return (
      <div className={classNames()}>
        <div className={classNames('select')}>
          <input
            className={classNames('input')}
            onChange={this.onChangeHandler}
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
            type="text"
          />
          <div className={classNames('placeholder', { '--forceOpen': this.state.inputValue })}>Выберете страну</div>
          <div className={classNames('expander')}>
            <div className={classNames('trangle', { '--isOpen': this.state.isOpen })} />
          </div>
        </div>
        <div className={classNames('list', { '--isOpen': this.state.isOpen && this.state.items.length })}>
          {this.getListItems()}
        </div>
      </div>
    );
  }
}

export default Dropdown;
