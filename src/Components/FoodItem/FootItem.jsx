import './FoodItem.css'
import { assets } from '../../Assets/assets';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
function FoodItem({id,name,description,image,price})
{
    //console.log("food item",id,name,description,image,price);
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    return (
        <>
            <div className="food-item">
                <div className="food-item-img-container">
                    <img src={image} alt="" className='food-item-image'/>
                    {
                            !cartItems[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
                            : <div className="food-item-counter">
                                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                                <p>{cartItems[id]}</p>
                                <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                              </div>
                        }
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                        
                    </div>
                <p className='food-item-desc'>{description}</p>
                <p className="food-item-price">${price}</p>
                </div>
            </div>
        </>
    )
}
export default FoodItem;