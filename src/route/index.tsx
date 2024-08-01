import { createBrowserRouter } from "react-router-dom";

import Home from "./homeTemp"
import ToolsGrid from "../components/toolsGrid";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/tools",
        element: <ToolsGrid/>,
    }
]);


export default router;