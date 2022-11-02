// import { Drawer } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { AiFillCloseCircle } from 'react-icons/ai';
import Product from 'renderer/modules/shared/interfaces/product.interface';

interface Props {
  responsiveClassName: string;
  baseClassName: string;
  billingModalOpened?: boolean;
  onBillToggle: () => void;
  productList: Product[] | null;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Billing: React.FC<Props> = ({
  responsiveClassName,
  baseClassName,
  billingModalOpened,
  onBillToggle,
  productList,
}) => {
  return (
    <>
      {billingModalOpened && (
        <div>
          <Dialog
            fullScreen
            open={billingModalOpened}
            onClose={onBillToggle}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={onBillToggle}
                  aria-label="close"
                >
                  <AiFillCloseCircle />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={onBillToggle}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List>

                {productList !== null &&
                  productList.map((prod: Product, idx) => (
                    <div key={prod.id}>
                      <ListItem button>
                        <ListItemText
                          primary={prod.name}
                          secondary={prod.description}
                        />
                      </ListItem>
                      {idx !== productList.length - 1 && <Divider /> }
                    </div>
                  ))}


            </List>
          </Dialog>
        </div>
      )}
      <div className={baseClassName + ' ' + responsiveClassName}>
        <h1>Billing</h1>
        <List>
          {productList !== null &&
            productList.map((prod: Product) => (
              <ListItem button key={prod.id}>
                <ListItemText
                  primary={prod.name}
                  secondary={prod.description}
                />
              </ListItem>
            ))}
        </List>
      </div>
    </>
  );
};

export default Billing;
