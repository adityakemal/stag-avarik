import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close, Filter, Filter1TwoTone, FilterAlt } from '@mui/icons-material';

export default function MobileDrawer({ children }) {
    const [showMobileModal, setShowMobileModal] = React.useState(false);

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    // const list = (anchor) => (
    //     <Box
    //         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // );

    return (
        <div>
            <React.Fragment>
                <Button onClick={() => setShowMobileModal(!showMobileModal)}><FilterAlt sx={{ color: '#A59480' }} /></Button>
                <Drawer
                    anchor={`left`}
                    open={showMobileModal}
                    onClose={() => setShowMobileModal(!showMobileModal)}
                    PaperProps={{
                        sx: { width: "fit-content" },
                    }}
                >
                    <div className='w-100 px-3 py-2'>
                        <div className="w-100 d-flex justify-content-end">
                            <Button onClick={() => setShowMobileModal(!showMobileModal)}> <Close /></Button>
                        </div>

                        {children}
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
