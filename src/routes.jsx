import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout/AppLayout';
import { Home, MyCart, RegisterStudent } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/meu-carrinho" element={<MyCart />} />
      <Route path="/cadastro-de-aluno" element={<RegisterStudent />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
