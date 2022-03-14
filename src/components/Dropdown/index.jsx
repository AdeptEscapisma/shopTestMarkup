import React, { useState } from 'react'
import ArrowIcon from '../../static/icons/dropdown-arrow.svg'

import './dropdown.css'
    
const dropdownItems = ['S', 'M', 'L'];

const Dropdown = () => {
    const [selectedItem, setSelectedItem] = useState(dropdownItems[0]);
    const [isOpen, setIsOpen] = useState(false);

    const onDropdownClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    const onDropdownItemClick = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedItem(item);
        setIsOpen(false);
    }

    return (
        <div className="dropdown-wrapper">
            <div className={"dropdown" + (isOpen ? ' active' : '')} onClick={onDropdownClick}>
                <span>РАЗМЕР: {selectedItem}</span>
                <img src={ArrowIcon} />
            </div>
            {isOpen && (
                <div className='dropdown-menu'>
                    {dropdownItems.map(item => {
                        return item !== selectedItem && (
                            <div className='dropdown-item' key={item} onClick={(e) => onDropdownItemClick(e, item)}>
                                <span>РАЗМЕР: {item}</span> 
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default Dropdown;