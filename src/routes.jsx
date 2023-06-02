import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Teste from './pages/Teste/Teste';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Teste />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
