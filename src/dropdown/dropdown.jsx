import React from 'react';
import PropTypes from 'prop-types';
import clssnms from 'clssnms';
import 'es6-object-assign/auto';
import FallbackSelect from './fallback_select';
import ItemsList from './items_list';
import { filterItems } from './utils';
import './dropdown.styl';

const classNames = clssnms('dropdown');

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      openToTop: false,
      searchValue: '',
      items: [],
      selectedItem: '',
    };

    this.dropdownRef = React.createRef();
    this.selectRef = React.createRef();
    this.itemsListRef = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('click', this.closeDropdown);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((!prevState.isOpen && this.state.isOpen) ||
      (this.state.isOpen && this.state.items.length !== prevState.items.length)) {
      if (!this.itemsListRef.current) {
        return;
      }

      const clientRect = this.dropdownRef.current.getBoundingClientRect();
      const listOffsetHeight = this.itemsListRef.current.getListOffsetHeight();

      if (clientRect.top + clientRect.height + listOffsetHeight + 20 > window.innerHeight) {
        this.setState({ openToTop: true });
      } else {
        this.setState({ openToTop: false });
      }
    }

    if (this.state.selectedItem !== prevState.selectedItem) {
      this.props.onChange(this.state.selectedItem);
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.closeDropdown);
  }

  onChangeInputHandler = (event) => {
    const searchValue = event.target.value;
    const items = filterItems(searchValue, this.props.items, this.props.maxItemsAmount);

    this.setState({ searchValue, items, isOpen: true });
  }

  onClickInputHandler = () => {
    if (!this.state.isOpen) {
      const itemsAmount = this.props.maxItemsAmount;
      const items = filterItems(this.state.searchValue, this.props.items, itemsAmount);
      this.setState({ isOpen: true, items });
    } else {
      this.setState({ isOpen: false });
    }
  }

  onChangeItem = (item) => {
    this.setState({
      searchValue: item,
      selectedItem: item,
      isOpen: false,
    });
  }

  getSelectedItem = () => this.state.selectedItem;

  closeDropdown = (event) => {
    if (!this.dropdownRef.current.contains(event.target)) {
      const nextState = { isOpen: false };

      if (this.state.searchValue === '') {
        // ability to clear dropdown value
        nextState.selectedItem = '';
      } else {
        // revert if user not select new one
        nextState.searchValue = this.state.selectedItem;
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
    if (this.state.isOpen && this.state.items.length) {
      itemsList = (<ItemsList
        ref={this.itemsListRef}
        searchValue={searchValue}
        onChange={this.onChangeItem}
        items={this.state.items}
        openToTop={this.state.openToTop}
      />);
    }

    return (
      <div className={classNames()} ref={this.dropdownRef}>
        <div className={classNames('select-wrapper')} onTouchStart={this.wrapperTouchHandler}>
          <FallbackSelect onChange={this.onChangeItem} items={this.props.items} />
          <div className={classNames('select')} ref={this.selectRef}>
            <input
              onClick={this.onClickInputHandler}
              className={classNames('input')}
              onChange={this.onChangeInputHandler}
              type="text"
              value={searchValue}
            />
            <div
              className={classNames('placeholder', {
                '--forceOpen': searchValue || this.state.isOpen,
                '--hidden': this.state.openToTop && this.state.isOpen && this.state.items.length,
              })}
            >
              {this.props.title}
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

Dropdown.propTypes = {
  onChange: PropTypes.func,
  maxItemsAmount: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

Dropdown.defaultProps = {
  onChange: () => {},
  maxItemsAmount: 10,
  items: [],
  title: 'Выберете из списка',
};

Dropdown.displayName = 'dropdown';

export default Dropdown;
