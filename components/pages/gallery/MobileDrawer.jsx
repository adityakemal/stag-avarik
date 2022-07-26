import * as React from 'react';
import { Close, FilterAlt } from '@mui/icons-material';
import { handleResetData } from 'redux/gallery/gallery.reducer';
import { useDispatch } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function MobileDrawer({ children }) {
    const [showMobileModal, setShowMobileModal] = React.useState(false);

    const dispatch = useDispatch()

    return (
        <div>
            <React.Fragment>
                <Button onClick={() => setShowMobileModal(!showMobileModal)}>
                    <FilterAlt sx={{ color: '#A59480' }} /> <h6 className="text-white m-0">Filter</h6>
                </Button>
                <Drawer
                    anchor={`left`}
                    open={showMobileModal}
                    onClose={() => setShowMobileModal(!showMobileModal)}
                    PaperProps={{
                        sx: { width: "fit-content", background: '#423B38' },
                    }}
                >
                    <div>
                        <div
                            className="w-100 d-flex justify-content-between pr-3 py-2 align-items-center"
                            style={{
                                position: 'sticky',
                                top: 0,
                                zIndex: 9999,
                                background: '#423B38',
                            }}
                        >
                            <Button onClick={() => setShowMobileModal(!showMobileModal)}> <Close sx={{ color: 'white' }} /></Button>
                            <div className='text-white cursor-pointer' onClick={() => dispatch(handleResetData())}>
                                Reset
                            </div>
                        </div>

                        <div className='w-100 px-3 py-2'>
                            {children}
                        </div>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
