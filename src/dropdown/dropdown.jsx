import React from 'react';
import clssnms from 'clssnms';
import { getCounties } from './countries';
import FallbackSelect from './fallback_select';
import ItemsList from './items_list';
import './dropdown.styl';

const classNames = clssnms('dropdown');

const MAX_ITEMS_AMOUNT = 10;

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      searchValue: '',
      countries: [],
      selectedCountry: null,
    };

    this.dropdownRef = React.createRef();
    this.selectRef = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.closeDropdown);
  }

  onChangeInputHandler = (event) => {
    const searchValue = event.target.value;
    const countries = getCounties(searchValue, MAX_ITEMS_AMOUNT);

    this.setState({ searchValue, countries, isOpen: true });
  }

  onClickInputHandler = () => {
    const countries = getCounties(this.state.searchValue, MAX_ITEMS_AMOUNT);
    this.setState({ isOpen: true, countries });
  }

  onChangeCountry = (country) => {
    this.setState({
      searchValue: country,
      selectedCountry: country,
      isOpen: false,
    });
  }

  closeDropdown = (event) => {
    if (!this.dropdownRef.current.contains(event.target)) {
      const nextState = { isOpen: false };

      if (this.state.searchValue === '') {
        // ability to clear dropdown value
        nextState.selectedCountry = null;
      } else if (this.state.selectedCountry) {
        // revert if user not select new one
        nextState.searchValue = this.state.selectedCountry;
      }

      this.setState(nextState);
    }
  }

  wrapperTouchHandler = () => {
    // there is no dinamic switch between touchscreen and mouse
    // Once user used touchscreen will always get native select
    this.selectRef.current.style['pointer-events'] = 'none';
  }

  render() {
    const { searchValue } = this.state;

    let itemsList = null;
    if (this.state.isOpen && this.state.countries.length) {
      itemsList = (<ItemsList
        searchValue={searchValue}
        onChange={this.onChangeCountry}
        countries={this.state.countries}
      />);
    }

    return (
      <div className={classNames()} ref={this.dropdownRef}>
        <div className={classNames('select-wrapper')} onTouchStart={this.wrapperTouchHandler}>
          <FallbackSelect onChange={this.onChangeCountry} />
          <div className={classNames('select')} ref={this.selectRef}>
            <input
              onClick={this.onClickInputHandler}
              className={classNames('input')}
              onChange={this.onChangeInputHandler}
              type="text"
              value={searchValue}
            />
            <div className={classNames('placeholder', { '--forceOpen': searchValue || this.state.isOpen })}>
              Выберете страну
            </div>
            <div className={classNames('expander')}>
              <div className={classNames('trangle', { '--isOpen': this.state.isOpen })} />
            </div>
          </div>
        </div>
        {itemsList}
      </div>
    );
  }
}

export default Dropdown;
