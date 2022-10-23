import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Sidebar from 'renderer/modules/shared/components/Sidebar/Sidebar';
import withAuth from 'renderer/modules/shared/hoc/with-user';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <Container
        disableGutters
        component="main"
        maxWidth={false}
        sx={{
          width: '100%',
          backgroundColor: '#f9f9f9',
          height: '100vh',
          minWidth: '80%',
        }}
      >
        <Outlet />
      </Container>
    </div>
  );
};

export default withAuth(MainLayout);
