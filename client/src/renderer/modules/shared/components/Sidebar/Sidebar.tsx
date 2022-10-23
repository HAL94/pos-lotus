import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { BiLogOut } from 'react-icons/bi';
import { useLogout } from 'renderer/modules/auth/hooks';

import { routes } from '../../lib/utils';
import TemporaryDrawer from '../TempDrawer/TempDrawer';
import AppLogo from '../UI/AppLogo/AppLogo';
interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({ className }) => {
  const route = useLocation();
  const { logout } = useLogout();
  const activeClass = 'bg-primary text-white rounded-2xl';

  return (
    <>
      <TemporaryDrawer className='inline lg:hidden' routes={routes} />
      <div className="hidden lg:flex lg:flex-col z-10 left-0 top-0 bottom-0 px-3 py-7 text-center border-r shadow-md overflow-x-hidden min-h-screen max-w-[20%]">
        <AppLogo width={90} height={90} />
        <nav aria-label="main sidebar" className="px-3">
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {routes.map(
              (routeItem: {
                path: string;
                Icon: IconType;
                title: string;
                id: string;
              }) => {
                return (
                  <ListItem
                    key={routeItem.id}
                    disablePadding
                    sx={{
                      margin: 'auto',
                      display: 'block',
                      width: 90,
                      marginY: 1,
                    }}
                    className={`${
                      route.pathname === routeItem.path ? activeClass : ''
                    }`}
                  >
                    <Link to={routeItem.path}>
                      <ListItemButton
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          outline: 'none',
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            justifyContent: 'center',
                          }}
                        >
                          <routeItem.Icon
                            size={30}
                            color={
                              route.pathname === routeItem.path
                                ? 'white'
                                : '#bdbdbd'
                            }
                          />
                        </ListItemIcon>
                        <ListItemText
                          className="font-semibold"
                          primary={routeItem.title}
                          sx={{
                            fontSize: 'sm',
                            color:
                              route.pathname === routeItem.path
                                ? 'white'
                                : '#bdbdbd',
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                );
              }
            )}
          </List>
        </nav>
        <div className="mt-auto">
          <Button
            onClick={() => logout()}
            variant="text"
            sx={{ color: '#bdbdbd', fontWeight: 600 }}
            startIcon={<BiLogOut size={30} color="#bdbdbd" />}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
