import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Close, FilterAlt } from '@mui/icons-material';

export default function MobileDrawer({ children }) {
    const [showMobileModal, setShowMobileModal] = React.useState(false);

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
                        sx: { width: "fit-content", background: 'black' },
                    }}
                >
                    <div>
                        <div
                            className="w-100 d-flex justify-content-between pr-3 py-2"
                            style={{
                                position: 'sticky',
                                top: 0,
                                zIndex: 9999,
                                background: 'black',
                            }}
                        >
                            <Button onClick={() => setShowMobileModal(!showMobileModal)}> <Close sx={{ color: 'white' }} /></Button>
                            Reset
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
