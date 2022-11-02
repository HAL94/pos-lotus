import React from 'react';
import Drawer from '@mui/material/Drawer';

const TempBillingDrawer: React.FC = () => {
  const [state, setState] = React.useState<string | null>('right');
  return (
    <div>
      <Drawer
        sx={{ width: 250 }}
        anchor={'right'}
        open={state === 'right'}
        onClose={(event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }

          setState(null);
        }}
      >
        Billing
      </Drawer>
    </div>
  );
};

export default TempBillingDrawer;
