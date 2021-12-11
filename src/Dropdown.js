import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownSelectedItems,
  DropdownControls,
  DropdownList,
  DropdownHeading,
} from './components';

const Dropdown = ({ items, multiple }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectAll = useCallback(() => {
    const allItems = items.map((_, index) => index);
    setSelectedItems([...allItems]);
  }, [items]);

  const onUnselectAll = useCallback(() => {
    setSelectedItems([])
  }, [])

  const onRemove = useCallback((itemIndex) => {
    setSelectedItems(selectedItems.filter(item => item !== itemIndex));
  }, [selectedItems])

  const onSelect = useCallback((itemIndex) => {
    if (multiple) {
      selectedItems.includes(itemIndex)
        ? setSelectedItems(selectedItems.filter(item => item !== itemIndex))
        : setSelectedItems([...selectedItems, itemIndex]);
    } else setSelectedItems([itemIndex]);
  }, [selectedItems]);

  return (
    <div className='dropdown-wrapper'>
      <DropdownHeading
        open={open}
        multiple={multiple}
        setOpen={setOpen}
        items={items}
        selectedItems={selectedItems}
      />
      <div className='dropdown'>
        {(multiple && selectedItems.length > 0) && (
          <DropdownSelectedItems items={items} onRemove={onRemove} selectedItems={selectedItems} />
        )}
        {open && (
          <>
            {multiple && <DropdownControls
              onUnselectAll={onUnselectAll}
              onSelectAll={onSelectAll}
            />}
            <DropdownList
              onSelect={onSelect}
              selectedItems={selectedItems}
              items={items}
            />
          </>
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  multiple: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

Dropdown.defaultProps = {
  multiple: false,
};

export default Dropdown;
