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
import { useState } from 'react';
import ProductsSort from './ProductsSort';
import ProductsFilter from './ProductsFilter';

export default function ProductsDrawer({sx,value,onChange,filter,changeFilter,categories,order,setOrder}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <ProductsSort value={value} onChange={onChange} order={order} setOrder={setOrder}/>
        <ProductsFilter filter={filter} changeFilter={changeFilter} categories={categories}/>
    </Box>
  );

  return (
    <div>
      <Button sx={{...sx}} variant='contained' onClick={toggleDrawer(true)}>Advanced Search</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

