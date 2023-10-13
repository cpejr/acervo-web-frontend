import { useEffect, useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { SystemLoading } from '../../components/features';
import { useRefreshToken } from '../../hooks/query/sessions';
import { Container } from './Styles';

export default function AppLayout() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const { isInitialLoading } = useRefreshToken();
  const { pathname } = useLocation();
  const timeToShowLoading = 2000; // milliseconds

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll page to top when it is opened
  }, [pathname]);

  useEffect(() => {
    const loadingTimer = setTimeout(
      () => setIsLoadingScreen(false),
      timeToShowLoading
    );

    return () => clearTimeout(loadingTimer);
  }, []);

  return isInitialLoading || isLoadingScreen ? (
    <SystemLoading />
  ) : (
    <Container>
      <Outlet />
    </Container>
  );
}
