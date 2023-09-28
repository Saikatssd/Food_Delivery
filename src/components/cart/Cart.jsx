import React from 'react'
import {
    addItemToCart,
    updateCartQuantity,
    removeItemFromCart
} from '../../Actions/cartAction';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cartItems } = useSelector((state) => state.cart);

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (newQty > stock) {
            return;
        }
        dispatch(addItemToCart(id, newQty));
    }
    const decreaseQty = (id, quantity) => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            dispatch(updateCartQuantity(id, newQty));
        }
    }

    //function to navigate to the delivery page
    const checkoutHandler = () => {
        navigate("/delivery");
    };

    return (
        <>
            {/* conditional rendering based on cartItems */}
            {
                cartItems.length === 0 ? (
                    <h2 className="mt-5">Your Cart is empty</h2>
                ) : (
                    <>
                        <h2 className="mt-5">
                            {""}
                            Your Cart: <b>{cartItems.length} items</b>
                        </h2>

                        {/* Cart Items */}
                        <div className="row flex flex-wrap">
                            <div className="flex flex-wrap">
                                {cartItems.map((item) => (
                                    <>
                                        <hr />
                                        <div className="cart-item" key={item.fooditem}>
                                            {/* display item image */}
                                            <div className="row">
                                                <div className="flex flex-wrap">
                                                    <img src={item.image} alt="items" height={99} width={115} />
                                                </div>
                                                {/* Display item Name  */}
                                                <div className="flex">
                                                    {item.name}
                                                </div>
                                                <div className="flex">
                                                    <p id="card_item_price">
                                                        <FontAwesomeIcon icon={faIndianRupeeSign} size='xs' />
                                                        {item.price}
                                                    </p>
                                                </div>
                                                {/* Quantity control  */}
                                                <div className="flex mt-4">
                                                    <div className="stockCounter inline-block">
                                                        {/* Decrease qty btn  */}
                                                        <span className="btn cursor-pointer bg-red-500 minus text-white" onClick={() => decreaseQty(item.fooditem, item.quantity)}>-</span>
                                                        <input type="number"
                                                            className='form-control count inline-block'
                                                            value={item.quantity}
                                                            readOnly
                                                            name="" id="" />
                                                        <span className="btn cursor-pointer plus bg-blue-500 text-white" onClick={increaseQty(item.fooditem, item.quantity, item.stock)}>+</span>
                                                    </div>
                                                </div>
                                                {/* Remove item buttom */}
                                                <div className="flex">
                                                    <i id="delete_cart_item" className="cursor-pointer fa fa-trash btn bg-red-500 text-white" onClick={()=>removeCartItemHandler(item.fooditem)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}
