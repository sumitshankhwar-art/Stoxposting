import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from './Components/Home';
import  Layout  from './Components/Layout';
import './index.css';
import { About } from './Components/About';
import { OurServices } from './Components/OurServices';
import { TheStoxDifference } from './Components/TheStoxDifference';
import { Salescalender } from './Components/SalesCalender';
import { ContactUs } from './Components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,         
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {path:"about",element:<About/>},
      {path:"services",element:<OurServices/>},
      {path:"difference",element:<TheStoxDifference/>},
      {path:"salescalender",element:<Salescalender/>},
      {path:"contact",element:<ContactUs/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <>   
   <RouterProvider router={router}></RouterProvider>
    </>
)
