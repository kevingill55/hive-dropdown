import React from 'react';
import PropTypes from 'prop-types';

const DropdownSelectedItems = ({
  items,
  onRemove,
  selectedItems,
}) => {
  return (
    <div className='dropdown-selected-container'>
      {selectedItems.map((itemIndex, index) => (
        <div key={`${index}-${itemIndex}`} className='dropdown-selected'>
          <div>{items[itemIndex].label}</div>
          <div
            role='button'
            className='dropdown-selected-x'
            onClick={() => onRemove(itemIndex)}
          >
            X
          </div>
        </div>
      ))}
    </div>
  );
};

DropdownSelectedItems.propTypes = {
  onRemove: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DropdownSelectedItems;
