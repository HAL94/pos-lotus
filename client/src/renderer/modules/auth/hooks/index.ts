import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import useSwr, { useSWRConfig } from 'swr';
import client from '../../../apollo-client';
import { LogoutDocument, MeDocument } from '../../../graphql/generated';
import { AUTH_USER_FETCH_KEY } from '../lib';

const fetcher = async () => {
  try {
    const response = await client.query({
      query: MeDocument,
      fetchPolicy: 'no-cache',
    });
    return response.data.me;
  } catch (error) {
    // console.log('an error occured checking auth', error);
    return false;
  }
};

export function useUser() {
  const { data, mutate } = useSwr(AUTH_USER_FETCH_KEY, fetcher);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // console.log('data', data);
    if (typeof data === 'boolean') {
      setLoading(false);
      // console.log('not available');
    } else if (data && data.success) {
      setLoading(false);
    }
  }, [data]);

  return {
    data,
    loading,
    mutate,
  };
}

export function useLogout() {
  const [logout, { data }] = useLazyQuery(LogoutDocument);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (data?.logout.success) {
      // console.log('logout done');
      (async () => {
        await mutate(AUTH_USER_FETCH_KEY);
        // console.log('result', res);
        window.location.reload();
      })();
    }
  }, [data, mutate]);

  return {
    logout,
  };
}
