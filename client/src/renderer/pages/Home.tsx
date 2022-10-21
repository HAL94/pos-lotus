import { useQuery } from '@apollo/client';
import { Alert, CircularProgress } from '@mui/material';
import Navbar from 'renderer/modules/shared/components/Navbar/Navbar';

import { TasksDocument } from '../graphql/generated';

function Home() {
  const { loading, error, data } = useQuery(TasksDocument, {
    fetchPolicy: 'no-cache',
  });

  return (
    <div className="z-0">
      <Navbar />
      {loading && <CircularProgress />}
      {!loading && error && <Alert severity="error">{error.message}</Alert>}
      {!loading && data && <h1>d</h1>}
    </div>
  );
}

export default Home;
