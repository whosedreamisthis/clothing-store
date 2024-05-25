import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";
import NavBar from "./components/navigation/nav-bar.component";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
