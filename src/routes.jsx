import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Home, QuemSomos } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/quemsomos" element={<QuemSomos />}/>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
