import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getHandleSortBy } from 'redux/gallery/gallery.reducer';

export default function SortMenu({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState()

    const { sortString } = useSelector(state => state.gallery)

    const dispatch = useDispatch()

    const recordButtonPosition = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    let closeMenu = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    const handleSort = (par) => {
        dispatch(getHandleSortBy(par))
        closeMenu();
    }


    const menuObj = [
        // { id: 'default', label: 'Default' },
        { id: 'name', label: 'Name' },
        { id: 'id', label: 'ID' },
    ]

    return (
        <div className='sort-menu'>
            <h6
                className='cursor-pointer text-white my-0'
                id="basic-button"
                onClick={recordButtonPosition}
                style={{ marginRight: 2, textTransform: 'capitalize' }}
            >
                Sort By {sortString}
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
                            <p key={i} onClick={() => handleSort(res.id)} className='m-0 py-1 cursor-pointer text-white'>{res.label}</p>
                        )
                    }
                </ul>
            </Menu >
        </div >
    );
}
