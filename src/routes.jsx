import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AppLayout } from './layouts';
import { Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<FormTest />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
