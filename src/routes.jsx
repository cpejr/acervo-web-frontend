import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { FormTest } from './pages';
import Teste from './pages/Teste/Teste';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<FormTest />} />
      <Route path="/" element={<Teste />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
