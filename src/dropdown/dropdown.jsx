import React from 'react';
import clssnms from 'clssnms';
import { getCounties } from './countries';
import './dropdown.styl';

const classNames = clssnms('dropdown');

const MAX_ITEMS_AMOUNT = 10;
const ALL_COUNTRIES = getCounties('');

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      inputValue: '',
      countries: [],
      selectedCountry: null,
    };

    this.dropdown = React.createRef();
    this.select = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.closeDropdown);
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const countries = getCounties(inputValue, MAX_ITEMS_AMOUNT);

    this.setState({ inputValue, countries, isOpen: true });
  }

  onClickInputHandler = () => {
    const countries = getCounties(this.state.inputValue, MAX_ITEMS_AMOUNT);
    this.setState({ isOpen: true, countries });
  }

  onClickListHandler = (event) => {
    if (event.target.className === classNames('item')) {
      this.setState({
        inputValue: event.target.innerText,
        selectedCountry: event.target.innerText,
        isOpen: false,
      });
    }
  }

  onChangeFallbackSelector = (event) => {
    this.setState({
      selectedCountry: event.target.value,
    });
  }

  getList() {
    if (!this.state.isOpen || this.state.countries.length === 0) {
      return null;
    }

    return (
      <div className={classNames('list')} onClick={this.onClickListHandler}>
        {this.state.countries.map((item) => {
          let value = item.name;

          if (this.state.inputValue) {
            value = item.name.toLowerCase().replace(this.state.inputValue.toLowerCase(), '');
          }

          return (
            <div key={item.code} className={classNames('item')}>
              {this.state.inputValue ? <span>{this.state.inputValue}</span> : null}
              {value}
            </div>
          );
        })}
      </div>
    );
  }

  closeDropdown = (event) => {
    if (!this.dropdown.current.contains(event.target)) {
      const nextState = { isOpen: false };

      if (this.state.inputValue === '') {
        nextState.selectedCountry = null;
      } else if (this.state.selectedCountry) {
        nextState.inputValue = this.state.selectedCountry;
      }

      this.setState(nextState);
    }
  }

  wrapperTouchHandler = () => {
    // there is no dinamic switch between touchscreen and mouse
    // Once user used touchscreen will always get native select
    this.select.current.style['pointer-events'] = 'none';
  }

  render() {
    let { inputValue } = this.state;
    if (!this.state.isOpen && this.state.selectedCountry) {
      inputValue = this.state.selectedCountry;
    }

    return (
      <div className={classNames()} ref={this.dropdown}>
        <div className={classNames('select-wrapper')} onTouchStart={this.wrapperTouchHandler}>
          <select className={classNames('fallback-select')} onChange={this.onChangeFallbackSelector}>
            {ALL_COUNTRIES.map(item => <option key={item.code}>{item.name}</option>)}
          </select>
          <div className={classNames('select')} ref={this.select}>
            <input
              onClick={this.onClickInputHandler}
              className={classNames('input')}
              onChange={this.onChangeHandler}
              type="text"
              value={inputValue}
            />
            <div className={classNames('placeholder', { '--forceOpen': inputValue || this.state.isOpen })}>
              Выберете страну
            </div>
            <div className={classNames('expander')}>
              <div className={classNames('trangle', { '--isOpen': this.state.isOpen })} />
            </div>
          </div>
        </div>
        {this.getList()}
      </div>
    );
  }
}

export default Dropdown;
