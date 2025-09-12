import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import TaskList from "../pages/TaskList";
import TaskDetail from "../pages/TaskDetail";
import ProductList1 from "../pages/ProductList1";
import Home1 from "../pages/Home1";
import Detail from "../pages/Detail";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

// eslint-disable-next-line react-refresh/only-export-components
function Layout() {
    return(
        <div>
            <Navbar/>
            <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
        </div>
    )
}

const router = createBrowserRouter([
    {path: '/home', element: <Layout/>,
        children: [
            { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        ]
     },
     {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  { path: "/task", element: <TaskList /> },
  { path: "/task/:id", element: <TaskDetail /> },
  {path: '/products1', element: <ProductList1/>},
  {path: '/', element: <Home1/>},
  {path: '/product', element: <Product/>},
  {path: '/detail', element: <Detail/>},
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>},
  { path: "/about", element: <About /> },
  {path: "*", element: <NotFound/>}
])

export default router;  