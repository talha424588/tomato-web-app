import './FoodItem.css'
import { assets } from '../../Assets/assets';
import { useState } from 'react';
function FoodItem({id,name,description,image,price})
{
    const  [cartItem,setCartItem] = useState(0);
    return (
        <>
            <div className="food-item">
                <div className="food-item-img-container">
                    <img src={image} alt="" className='food-item-image'/>
                    {
                            !cartItem ? <img className='add' onClick={()=>setCartItem(prev => prev+1)} src={assets.add_icon_white} alt="" /> 
                            : <div className="food-item-counter">
                                <img src={assets.remove_icon_red} onClick={()=>setCartItem(prev=>prev-1)} alt="" />
                                <p>{cartItem}</p>
                                <img src={assets.add_icon_green} onClick={()=>setCartItem(prev=>prev+1)} alt="" />
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