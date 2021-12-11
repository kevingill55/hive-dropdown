import React from 'react';
import PropTypes from 'prop-types';

const DropdownList = ({
  onSelectAll,
  onUnselectAll,
}) => {
  return (
    <div className='dropdown-select-options'>
      <div className='dropdown-select-item' onClick={onSelectAll}>
        Select All
      </div>
      <div className='dropdown-select-item' onClick={onUnselectAll}>
        Unselect All
      </div>
    </div>
  );
};

DropdownList.propTypes = {
  onSelectAll: PropTypes.func.isRequired,
  onUnselectAll: PropTypes.func.isRequired,
};

export default DropdownList;
