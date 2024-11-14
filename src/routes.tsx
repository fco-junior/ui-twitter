import { createBrowserRouter } from "react-router-dom";

import { Timeline } from './pages/Timeline';
import { Status } from "./pages/Status";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Timeline />
  },
  {
    path: "/tweet",
    element: <Status />
  }
]);