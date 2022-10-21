/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu, { MenuProps } from '@mui/material/Menu';

import { Divider, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { CustomMenuItem } from '../../../lib/utils';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

interface Props {
  options: CustomMenuItem[];
  ButtonComponent: any;
  buttonProps: any;
}

const SimpleMenuList: React.FC<Props> = ({
  options,
  ButtonComponent,
  buttonProps = {},
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <ButtonComponent {...buttonProps} onClick={handleClick} />
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        id="simple-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          width: 200,
        }}
      >
        {options.map((opt) => {
          if (opt.isDivider) {
            return <Divider key={opt.id} />;
          }
          let onClick = () => {};
          if (opt.onClick !== null) {
            onClick = opt.onClick;
          }
          return (
            <MenuItem onClick={onClick} key={opt.id}>
              {opt.component && opt.component()}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
};

export default SimpleMenuList;
