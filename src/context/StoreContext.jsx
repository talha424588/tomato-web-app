import { createContext } from "react";
import { food_list } from "../Assets/assets";

export const StoreContext = createContext(null);

const  StoreContextProvier = (props) =>
{
    const contextValue = {
        food_list
    };

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvier;