import { useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import "./Home.css";
import FoodDsiplay from "../../Components/FoodDisplay/FoodDisplay";
function Home() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Header></Header>
      <Menu category={category} setCategory={setCategory} />
      <FoodDsiplay category={category}></FoodDsiplay>
    </>
  );
}
export default Home;
