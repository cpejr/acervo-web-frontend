import useAuthStore from '../../stores/auth';
import { removeIsLoggedIn, setIsLoggedIn } from '../../utils/isLoggedIn';
import api from './instance';

// User sessions
export const login = async (credentials) => {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.post('/login', credentials);

  setIsLoggedIn();
  setAuth(data.accessToken);
  return data;
};
export const logout = async () => {
  const { clearAuth } = useAuthStore.getState();
  await api.post('/logout');

  removeIsLoggedIn();
  clearAuth();
};
export async function refresh() {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.get('/refresh');

  setAuth(data.accessToken);

  return data;
}
