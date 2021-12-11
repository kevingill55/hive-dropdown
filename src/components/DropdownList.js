import React from 'react';
import PropTypes from 'prop-types';

const DropdownList = ({
  items,
  selectedItems,
  onSelect,
}) => {
  return (
    <ul>
      {items.map(({ label, id }, index) => (
        <li
          key={id}
          className='dropdown-list-item'
          onClick={() => onSelect(index)}
        >
          <div
            className='dropdown-list-item-icon'
            style={{
              backgroundColor: selectedItems.includes(index) ? 'purple' : 'transparent'
            }}
          />
          <p>{label}</p>
        </li>
      ))}
    </ul>
  );
};

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownList;
