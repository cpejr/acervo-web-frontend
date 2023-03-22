import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<h1>Testando, testando... 1 2 3 Testando </h1>}
      />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
