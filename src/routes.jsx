import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AppLayout } from './layouts';
import { FormTest } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<FormTest />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
