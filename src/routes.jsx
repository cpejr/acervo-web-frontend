import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { FormTest } from './pages';

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
