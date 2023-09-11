import './App.css';
import StudentsData from './components/studentsdata';
import StudentsDeets from './components/createdeets';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Children } from 'react';
import Navlinks from './components/navlinks';
import Home from './components/home';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navlinks />,
      children: [
        {
          index:true,
          element:<Home />
        },
        {
          path: '/input',
          element: <StudentsDeets />,
          errorElement: <div> Page  not Found </div>
        },
        {
          path: '/data',
          element: <StudentsData />,
          errorElement: <div> Page  not Found </div>
        }

      ]
    }
   
  ])

  return (
    <div>

{/* <StudentsDeets /> */}

      <RouterProvider router = {router} />

    </div>
  );
}

export default App;
