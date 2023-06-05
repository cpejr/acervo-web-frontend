import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Home, TesteFooter } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/testeFooter" element={<TesteFooter />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
