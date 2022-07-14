import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SortMenu({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState()

    const recordButtonPosition = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    let closeMenu = () => {
        setMenuOpen(false);
    }

    const menuObj = [
        { id: 'default', label: 'Default' },
        { id: 'name', label: 'Name' },
        { id: 'id', label: 'ID' },
    ]


    return (
        <div className='sort-menu'>
            <h6
                className='cursor-pointer text-white my-0'
                id="basic-button"
                onClick={recordButtonPosition}
                style={{ marginRight: 2 }}
            >
                Sort By
            </h6>
            <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={closeMenu}
            >
                <ul className="pr-5 pl-2"
                    style={{
                        background: '#423B38',
                        width: 100
                    }}>
                    {
                        menuObj.map((res, i) =>
                            <p key={i} className='m-0 py-1 cursor-pointer text-white'>{res.label}</p>
                        )
                    }
                </ul>
            </Menu >
        </div >
    );
}
