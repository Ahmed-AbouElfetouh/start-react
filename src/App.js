import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLatout from './Components/MasterLayout/MasterLatout.jsx';
import Home from './Components/Home/Home.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';

let paths = createBrowserRouter([
  {
    path: '',
    element: <MasterLatout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={paths} />
    </Fragment>
  );
}

export default App;
