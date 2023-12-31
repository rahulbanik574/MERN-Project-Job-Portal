import {createBrowserRouter} from "react-router-dom";
  
import App from "../App";
import Home from "../Pages/Home";
//import Abou from "../Pages/Abou";

const router = createBrowserRouter([

    {
      path: "/",
      element: <App />,
      children:[
        {
          path:"/",
          element:<Home/>
        },

        
        
      ],
    },
  ]);

  export default router;