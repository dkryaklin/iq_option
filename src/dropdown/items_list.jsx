import React from 'react';
import PropTypes from 'prop-types';
import clssnms from 'clssnms';

const classNames = clssnms('dropdown');

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.listRef = React.createRef();
  }

  onClickHandler = (event) => {
    if (event.target.className === classNames('item')) {
      this.props.onChange(event.target.innerText);
    }
  }

  getListOffsetHeight = () => this.listRef.current.offsetHeight

  render() {
    return (
      <div
        ref={this.listRef}
        className={classNames('list', { '--openToTop': this.props.openToTop })}
        onClick={this.onClickHandler}
        role="presentation"
      >
        {this.props.countries.map((country) => {
          let value = country.name;
          let { searchValue } = this.props;

          searchValue = searchValue.toLowerCase();

          if (searchValue) {
            value = country.name.toLowerCase().replace(searchValue, '');
          }

          return (
            <div key={country.code} className={classNames('item')}>
              {searchValue ? <span>{searchValue}</span> : null}
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}

ItemsList.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    short: PropTypes.string,
  })).isRequired,
  openToTop: PropTypes.bool.isRequired,
};

ItemsList.displayName = 'items_list';

export default ItemsList;
