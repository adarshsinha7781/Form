import React from 'react'
import { useState } from 'react'
import './Dropdown.css';
import { useRef } from 'react';

export default function Dropdown() {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen]= useState<boolean>(false);
    const handleDropDownFocus =(state:boolean) => {
        setOpen(!state);
    };
    const handleClickOutsideDropdown =((e:any)=> {
        if(open && !dropdownRef.current?.contains(e.target as Node)){
            setOpen(false);
        }
    })
    window.addEventListener("click", handleClickOutsideDropdown)

    
    console.log(open);

    return (
        <div className='main app-drop-down-container' ref={dropdownRef}>
            <p className='heading'>Choose an option from the Dropdown:</p>
            <button className='button-4' onClick={(e) => handleDropDownFocus(open)}>Select an item</button>
            { open && (
                <ul className='optionsList'>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            )}
        </div>
  )
}
