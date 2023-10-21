import "./categories.style.scss";
import {Routes , Route} from 'react-router-dom'
import Home from "./routes/Home/Home";
import Auth from "./components/auth/auth";
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import CaregoriesList from "./components/category-list/caregories-list";
import { Fragment } from "react";
import Shop from "./components/shop/shop";
import CheckOut from "./components/check-out/check-out";
function App() {

  return (
   <Fragment>
     <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}></Route>
      <Route path="shop/*" element={<Shop />}></Route>
      <Route path="account" element={<Auth />}></Route>
      <Route path="checkout" element={<CheckOut />}></Route>
      </Route>
    </Routes>
   </Fragment>

  );
}

export default App;
