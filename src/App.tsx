import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import LayoutProvider from './providers/LayoutProvider';
import TanstackProvider from './providers/TanstackProvider';
import Login from './components/pages/login';
import Register from './components/pages/register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
