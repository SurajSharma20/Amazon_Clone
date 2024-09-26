import Header from "./components/headers/Header";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/chekouts/Checkout"
import Signin from "./pages/signIn/Signin"
// import Order from "./pages/order/Order";
import Prime from "./pages/prime/Prime";


import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Order from "./pages/order/Order";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
        </div>
      ),
    },
    {
      path: "checkout",
      element: (
        <div>
          <Header/>
          <Checkout />
        </div>
      ),
    },

    {
      path: "signin",
      element: (
        <div>
          <Header/>
          <Signin />
        </div>
      ),
    },
    
    {
      path: "prime",
      element: (
        <div>
          <Header/>
          <Prime />
        </div>
      ),
    },
    {
      path: "signup",
      element: (
        <div>
          <Header/>
          <Signup />
        </div>
      ),
    },
    {
      path: "order",
      element: (
        <div>
          <Header/>
          <Order/>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
