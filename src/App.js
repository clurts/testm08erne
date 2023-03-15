import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './views/Home';
import Layout from './components/Layout';
import Blah, {blahLoader} from './views/Blah';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Layout />} >
      <Route index element={<Home />} />
      <Route path="blah" element={<Blah />} loader={blahLoader} />
    </Route>

  ))
  return <RouterProvider router={router} /> 
   
}

export default App;
