import {createBrowserRouter } from "react-router-dom";

import Home from '../page';
import About from "../page/about";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

export default router;