import { useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./Home.css";
import FoodDsiplay from "../../Components/FoodDisplay/FoodDisplay";
import App from "../../Components/App/App";
function Home() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Header></Header>
      <Menu category={category} setCategory={setCategory} />
      <FoodDsiplay category={category}></FoodDsiplay>
      <App></App>
    </>
  );
}
export default Home;
