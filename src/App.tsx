import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import LayoutProvider from './providers/LayoutProvider';
import TanstackProvider from './providers/TanstackProvider';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutProvider />}></Route>
      </Route>
    )
  );

  return (
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  );
}

export default App;
