import React from 'react'
import { useState } from 'react';
import './Dropdown.css'

export default function Dropdown({selected, setSelected}: {selected:any, setSelected:any}) {
    const [isActive, setIsActive] =useState(false);
    const options= ['React', 'Vue', 'Angular']
  return (
    <div className='dropdown' >
        <h2>Custom Form Project</h2>
        <div className='dropdown-btn' onClick={(e) => 
        setIsActive(!isActive)}>{selected}<span className='fas fa-caret-down'></span>
        </div>
        {isActive && (
            <div className="dropdown-content">
                {options.map((option) => (
                    <div onClick={(e)=> {
                        setSelected(option);
                        setIsActive(false);
                    }}
                    className='dropdown-item'>
                        {option}
                        </div>
                ))}
                </div>
            )}
        </div>
        );
    }
