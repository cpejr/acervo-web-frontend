import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout/AppLayout';
import { Home } from './pages';
import MyCart from './pages/Cart/MyCart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/Cart" element={<AppLayout />}>
        <Route index element={<MyCart />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
