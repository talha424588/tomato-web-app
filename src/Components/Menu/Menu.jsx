import "./Menu.css";
import { menu_list } from "../../Assets/assets";
function Menu({ category, setCategory }) {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-text-menu">
          Choose from a diverse menu featuring a delectable array of dishes.Our
          mission is to satify your craving and elevate your dining experience,
          one delicious at a time.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu"
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}
export default Menu;
