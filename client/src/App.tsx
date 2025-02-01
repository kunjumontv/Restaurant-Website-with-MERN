import Login from "./auth/Login";
import Signup from "./auth/Signup";
import MainLayout from "./MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the application's routes
const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />, // Main layout that acts as a wrapper for other pages
   
    // children: [
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   },
    // ],
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/signup", 
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <main>
      {/* Provides routing functionality to the application */}
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default App;
