import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import {
    addItemToCart,
    updateCartQuantity,
    removeItemFromCart
} from '../Actions/cartAction';

export default function Fooditem({ fooditem }) {

    const [quantity, setQuantiy] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const dispatch = useDispatch();
    const alert = useAlert();

    const cartItems = useSelector((state)=>state.cart.cartItems);


    useEffect(()=>{
        const cartItem = cartItems.find((item)=>item.fooditem === fooditem._id);
        if (cartItem) {
            setQuantiy(cartItem.quantity);
            setShowButtons(true);
        }
    },[cartItems,fooditem]);

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantiy((prevQuantity) => {
                const newQuantiy = prevQuantity - 1;
                dispatch(updateCartQuantity(fooditem._id, newQuantiy));
                return newQuantiy;
            });
        }
        else {
            setQuantiy(0);
            setShowButtons(false);
            dispatch(removeItemFromCart(fooditem._id));
        }
    };

    const increaseQty = () => {
        if (quantity < fooditem.stock) {
            setQuantiy((prevQuantity) => {
                const newQuantiy = prevQuantity + 1;
                if (newQuantiy > 0) {
                    dispatch(addItemToCart(fooditem._id, newQuantiy));
                    dispatch(updateCartQuantity(fooditem._id, newQuantiy))
                        .then(() => {
                            alert.success("Items added to cart successfully");
                            setShowButtons(true);
                        })
                        .catch((error) => {
                            alert.error("Failed to add item to the cart");
                        })

                }
                else {
                    alert.error("Please select a quantity")
                }
                return newQuantiy;
            });
        }
    };

    const showAddToCartButtons = () => {
        setShowButtons(true);
    }

    return (
        <div className="my-3 ">
            <div className='card p-3 rounded-md my-3'>
                <img className='card-img-top mx-auto' src={fooditem.images[0].url} alt={fooditem.name} />
                <div className="card-body flex flex-col mt-2">
                    <h5 className="card-title text-xl">{fooditem.name}</h5>
                    <p className="fooditem_des">
                        {fooditem.description}
                    </p>
                    <p className="card-text">
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />

                        {fooditem.price}
                        <br />
                    </p>
                    {!showButtons && (<button onClick={showAddToCartButtons} id='cart_btn' className='btn btn-primary d-inline ml-4 my-4' type="button" disabled={fooditem.stock === 0}>Add to Cart</button>
                    )
                    }
                    {showButtons && (
                        <div className='stockCounter inline-block'>
                            <span className='btn cursor-pointer bg-red-600 minus text-white' onClick={decreaseQty} >-</span>
                            <input type="number"
                                className='form-control count inline-block'
                                value={quantity}
                                readOnly
                                name="" id="" />
                            <span className="btn cursor-pointer plus bg-blue-500 text-white" onClick={increaseQty}>+</span>
                        </div>
                    )}
                    <hr />
                    <p>
                        Status:
                        <span id="stock_status" className={fooditem.stock > 0 ? "greenColor" : "redColor"}>
                            {fooditem.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}
