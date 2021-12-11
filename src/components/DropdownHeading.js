import React from 'react';
import PropTypes from 'prop-types';

const DropdownHeading = ({
  open,
  multiple,
  setOpen,
  selectedItems,
  items,
}) => {
  return (
    <div className='dropdown-heading' onClick={() => setOpen(!open)}>
      {multiple ? (
        <>
          {selectedItems.length === 0 && <div>No Options Selected...</div>}
          {selectedItems.length === 1 && <div><strong>1</strong> Item Selected</div>}
          {selectedItems.length > 1 && <div><strong>{`${selectedItems.length} `}</strong>{'Items Selected'}</div>}
        </>
      )
        : (
          <>
            {selectedItems.length === 0 && <div>No Options Selected...</div>}
            {selectedItems.length === 1 && <div><strong>{items[selectedItems[0]].label}</strong></div>}
          </>
        )
      }
      <div className='arrow-wrapper'>
        <div className={open ? 'arrow open' : 'arrow closed'} />
      </div>
    </div>
  );
};

DropdownHeading.propTypes = {
  open: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DropdownHeading;
