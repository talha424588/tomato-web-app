import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FoodItem/FootItem";
function FoodDsiplay({props})
{
    const {food_list} = useContext(StoreContext);

    return (
        <>
            <div className="food-display" id="food-display">
                <h2>Top dishes near you</h2>
                <div className="food-display-item">
                    {
                        food_list.map((item, index) => {
                            return <FoodItem id={item.id} name={item.name} description={item.description} image={item.image}></FoodItem>
                        })};
                </div>
            </div>
        </>
    )
}
export default FoodDsiplay;