import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { checkAuth } from './redux/slices/authSlice';
import Entry from './Entry';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
function App() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Provider store={store}>
      <Entry isAuthenticated={isAuthenticated} loading={loading} />
    </Provider>
  );
}

export default AppWrapper;
