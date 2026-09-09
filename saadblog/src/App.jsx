import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//createBrowserRouter → Creates the routing system for your React app.
// RouterProvider → Connects that router to your React app so routing works.
// Outlet → If you want to display something always like our Nav you can use it


import Home from "./component/home"
import About from "./component/about"
import Navbar from "./component/navbar"
import Singleblog from "./component/singleblog"
import Posts from "./component/post"
import Quotes from "./component/quote"
import Project from "./component/project"
import Singleproject from "./component/singleproject";
import SingleQuote from "./component/singlequote";


function Layout() {
  return (
    <>
      <Navbar />

        <Outlet /> 
        {/* If no outlet you will only see navbar not its children */}
    
    </>
  );
}

const router =  createBrowserRouter([
      {path:"/",element:<Layout/>,

      children:[
  
  
      {path:"/",element:<Home/>},
      {path:"/singleblog/:slug",element:<Singleblog/>},
      {path:"/post",element:<Posts/>},
      {path:"/quote",element:<Quotes/>},
      {path:"/project",element:<Project/>},
      {path:"/about", element:<About/>},
      {path:"/singleproject/:id", element:<Singleproject/>},
      {path:"/singlequote/:id", element:<SingleQuote/>}, 


      { path: "*", element: <h1>404 - Page Not Found</h1> }
      
],},])

function App(){


  return <RouterProvider router={router} />;
}
export default App
