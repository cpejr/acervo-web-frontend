import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';

import { Footer } from './components/features';
import { AppLayout, RegisterLayout, SchoolLayout } from './layouts/index';
import {
  Home,
  MyCart,
  NotFound,
  Profile,
  OurHistory,
  Register,
  SchoolSection,
  RegisterLegalPerson,
  RegisterPhysicalPerson,
  RegisterStudent,
  Event,
} from './pages';

// For the routes that need footer
function HasFooterRoutes() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<HasFooterRoutes />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="nossa-historia" element={<OurHistory />} />
          <Route path="nossa-historia" element={<OurHistory />} />
          <Route path="eventos" element={<Event />} />
        </Route>
      </Route>

      <Route path="/" element={<SchoolLayout />}>
        <Route index element={<Home />} />
        <Route path="area-escolar" element={<SchoolSection />} />
      </Route>

      <Route path="/" element={<RegisterLayout />}>
        <Route path="cadastro" element={<Register />} />
        <Route path="cadastro-aluno" element={<RegisterStudent />} />
        <Route
          path="cadastro-pessoa-juridica"
          element={<RegisterLegalPerson />}
        />
        <Route
          path="cadastro-pessoa-fisica"
          element={<RegisterPhysicalPerson />}
        />
      </Route>

      <Route path="/meu-carrinho" element={<MyCart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
