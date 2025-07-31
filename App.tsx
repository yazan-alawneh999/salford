import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { checkAuth } from './redux/slices/authSlice';
import Entry from './Entry';
import { fetchProfile } from './redux/slices/profileSlice ';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const AppWrapper = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>
);

function App() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    const initialize = async () => {
      await dispatch(checkAuth());
      await dispatch(fetchProfile());
    };
    initialize();
  }, [dispatch]);

  return <Entry isAuthenticated={isAuthenticated} loading={loading} />;
}

export default AppWrapper;
