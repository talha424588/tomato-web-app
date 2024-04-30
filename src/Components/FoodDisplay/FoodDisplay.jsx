import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FoodItem/FootItem";
function FoodDsiplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-item">
          {food_list.map((item, index) => {
            if (category === "all" || category === item.category) {
              return (
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                ></FoodItem>
              );
            }
          })}
          ;
        </div>
      </div>
    </>
  );
}
export default FoodDsiplay;
