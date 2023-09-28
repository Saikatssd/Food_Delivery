import React from 'react'
import { Link } from 'react-router-dom'

export default function Restaurant({ restaurant }) {
    return (
        <div className="my-3 ">
            <div className='card p-3 rounded-md my-3'>
                <Link to={`/eats/stores/${restaurant._id}/menus`} className='btn'>
                    <img className='card-img-top mx-auto' src={restaurant.images[0].url} alt={restaurant.name} />
                </Link>
                <div className="card-body flex flex-col mt-2">
                    <h5 className="card-title text-xl">{restaurant.name}</h5>
                    <p className="rest_address">
                        {restaurant.address}
                    </p>
                    <div className="ratings mt-auto flex items-center">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(restaurant.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span className='no_of_reviews'>({restaurant.numOfReviews} Reviews)</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
