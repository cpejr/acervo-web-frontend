import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout/AppLayout';
import { Home, MyCart, NotFound, Profile, OurHistory } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="nossa-historia" element={<OurHistory />} />
      </Route>
      <Route path="/meu-carrinho" element={<MyCart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
