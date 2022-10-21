import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import EnFlag from 'renderer/assets/en_flag.svg';
import { CgProfile } from 'react-icons/cg';
import { AiFillSetting } from 'react-icons/ai';
import SimpleMenuList from '../UI/SimpleMenuList/SimpleMenuList';
import IconButtonComponent from '../Button/IconButtonComponent/IconButtonComponent';
import { configureItemMenuList } from '../../lib/utils';
import PrimaryTextField from '../UI/PrimaryTextField/PrimaryTextField';

const Navbar = () => {
  const navBarProfileButtonOptions = configureItemMenuList([
    {
      title: 'Profile',
      itemIcon: <CgProfile size={20} />,
      onClick: () => {
        console.log('profile clicked');
      },
    },
    {
      title: 'div',
      itemIcon: null,
      onClick: null,
    },
    {
      title: 'Settings',
      itemIcon: <AiFillSetting size={20} />,
      onClick: () => {
        console.log('settings clicked');
      },
    },
  ]);
  const navBarLangButtonOptions = configureItemMenuList([
    {
      title: 'English',
      itemIcon: (
        <>
          <img src={EnFlag} width={20} alt="English Language" />
        </>
      ),
      onClick: () => {
        console.log('english clicked');
      },
    },
    {
      title: 'div',
      itemIcon: null,
      onClick: () => {},
    },
    {
      title: 'Arabic',
      itemIcon: null,
      onClick: () => {
        console.log('Arabic clicked');
      },
    },
  ]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: 64, background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar sx={{ padding: 5 }}>
          <PrimaryTextField />
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: 'center', marginLeft: '40px' }}
          >
            <SimpleMenuList
              ButtonComponent={IconButtonComponent}
              buttonProps={{
                IconComponent: ({ src }: { src: string }) => (
                  <img src={src} alt="English Language" />
                ),
                iconProps: {
                  src: EnFlag,
                },
              }}
              options={navBarLangButtonOptions}
              // options={['Arabic', 'English']}
            />

            <SimpleMenuList
              ButtonComponent={IconButtonComponent}
              buttonProps={{
                IconComponent: Avatar,
                iconProps: {
                  src: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1',
                },
              }}
              // options={['Home', 'div', 'Profile', 'Settings']}
              options={navBarProfileButtonOptions}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
