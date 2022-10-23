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
import { AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import IconButtonComponent from '../Button/IconButtonComponent/IconButtonComponent';
import { Route } from '../../lib/utils';
import { Link } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
interface Props {
  className?: string;
  routes: Route[];
}

const TemporaryDrawer: React.FC<Props> = ({ className, routes }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {routes.map((route) => (
          <ListItem key={route.path} disablePadding>
            <Link to={route.path}>
              <ListItemButton>
                <ListItemIcon>
                  <route.Icon size={30} color={'#bdbdbd'} />
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={`${className}`}>
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <IconButtonComponent
        onClick={toggleDrawer('left', true)}
        buttonText=""
        iconProps={{ size: 25 }}
        IconComponent={AiOutlineMenu}
      />
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
