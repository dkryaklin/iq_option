import React from 'react';
import clssnms from 'clssnms';
import { getCounties } from '../countries';
import './dropdown.styl';

const classNames = clssnms('dropdown');

const MAX_ITEMS_AMOUNT = 10;

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
    document.addEventListener('touchstart', this.onTouchHandler);
    document.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount = () => {
    document.removeEventListener('touchstart', this.onTouchHandler);
    document.removeEventListener('click', this.onClickHandler);
  }

  onTouchHandler = (event) => {
    event.preventDefault();
    this.onClickHandler(event);
  }

  onClickHandler = (event) => {
    const contains = this.dropdown.current.contains(event.target);
    if (contains) {
      if (event.target.className === classNames('item')) {
        this.setState({
          inputValue: '',
          selectedCountry: event.target.innerText,
          isOpen: false,
        });
      }
    } else {
      this.setState({ isOpen: false });
    }
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const countries = getCounties(inputValue, MAX_ITEMS_AMOUNT);

    this.setState({ inputValue, countries });
  }

  onFocusHandler = () => {
    const countries = getCounties('', MAX_ITEMS_AMOUNT);
    this.setState({ isOpen: true, countries });
  }

  getList() {
    return (
      <div
        className={classNames('list', {
          '--isOpen': this.state.isOpen && this.state.countries.length,
        })}
      >
        {this.state.countries.map((item) => {
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
        })}
      </div>
    );
  }

  render() {
    let { inputValue } = this.state;
    if (!this.state.isOpen && this.state.selectedCountry) {
      inputValue = this.state.selectedCountry;
    }

    return (
      <div className={classNames()} ref={this.dropdown}>
        <div className={classNames('select')}>
          <input
            className={classNames('input')}
            onChange={this.onChangeHandler}
            onFocus={this.onFocusHandler}
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
        {this.getList()}
      </div>
    );
  }
}

export default Dropdown;
