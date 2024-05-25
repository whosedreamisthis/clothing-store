import Home from "./routes/home/home.component";
// import Shop from "./routes/shop/shop.component";
import NavBar from "./components/navigation/nav-bar.component";
import { Route, Routes } from "react-router-dom";
const Shop = () => {
  return <h1> I am the shop page</h1>;
};
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
