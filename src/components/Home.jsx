import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    getRestaurants,
    sortByRatings,
    sortByReviews,
    toggleVegOnly,
} from "../Actions/restaurantAction.jsx";
import Restaurant from './Restaurant.jsx';
import Loader from './Layout/Loader.jsx';
import Message from './Message.jsx';
import CountRestaurant from './CountRestaurant.jsx';


export default function Home() {

    const dispatch = useDispatch();

    const {
        loading: restaurantsLoading,
        error: restaurantsError,
        restaurants,
        showVegOnly,
    } = useSelector((state) => state.restaurants);

    useEffect(() => {
        if (restaurantsError) {
            return alert.error(restaurantsError);
        }
        dispatch(getRestaurants());
    }, [dispatch, restaurantsError]);

    const handleSortByRatings = () => {
        dispatch(sortByRatings());
    };

    const handleSortByReviews = () => {
        dispatch(sortByReviews());
    };
    const handleToggleVegOnly = () => {
        dispatch(toggleVegOnly());
    };

    return (
        // <div className='mx-auto max-w-4xl p-4'>
        <div className='mx-auto  p-4'>
        <CountRestaurant />

            {restaurantsLoading ? (
                <Loader />
            ) : restaurantsError ? (
                <Message variant="text-red-700">{restaurantsError}</Message>
            ) : (
                <>
                    <section>
                        <div className="sort">
                            <button className='sort_veg p-3' onClick={handleToggleVegOnly}>
                                {showVegOnly ? "Show All " : "Pure Veg"}
                            </button>
                            <button className='sort_rev p-3' onClick={handleSortByReviews}>
                                Sort By Reviews
                            </button>
                            <button className='sort_rat p-3' onClick={handleSortByRatings}>
                                Sort By Ratings
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {
                                restaurants && restaurants.restaurants ? (
                                    restaurants.restaurants.map((restaurant) =>
                                        !showVegOnly || (showVegOnly && restaurant.isVeg) ?
                                            (
                                                <Restaurant key={restaurant._id} restaurant={restaurant} />
                                            ) : null
                                    )

                                ) : (
                                    <Message variant="info">No restaurants Found. </Message>

                                )}
                        </div>
                    </section>
                </>
            )}

        </div>
    )
}



//   {/* <Restaurant/> */}
//             {/* <Loader/> */}
//             {/* <Message /> */}
//             <h1 className='text-3xl'>Restaurants</h1>
//             <section className="container mt-5" id="products">
//                 <div className="row">
//                     {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3 place-items-center">
//                         <div className='card p-3 rounded-md my-3'>
//                             <img className='card-img-top mx-auto' src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-4x3/image.jpg" alt="" />
//                             <div className="card-body flex flex-col">
//                                 <h5 className="card-title text-xl">Domino's</h5>
//                                 <p className="rest_address">
//                                     Ground Floor, MG Metro Station,Karnataka-560001
//                                 </p>
//                                 <div className="ratings mt-auto flex ">
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="tabler:star-half-filled" />
//                                     <Icon icon="clarity:star-line" />
//                                     <span className='no_of_reviews'>(35 reviews)</span>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className='card p-3 rounded-md my-3'>
//                             <img className='card-img-top mx-auto' src="https://1tsp.in/wp-content/uploads/2021/07/image-2.jpg" alt="" />
//                             <div className="card-body flex flex-col">
//                                 <h5 className="card-title text-xl">Domino's</h5>
//                                 <p className="rest_address">
//                                     Ground Floor, MG Road Metro Station,1 Church St, Bengaluru, Karnataka-560001
//                                 </p>
//                                 <div className="ratings mt-auto flex ">
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="tabler:star-half-filled" />
//                                     <Icon icon="clarity:star-line" />
//                                     <span className='no_of_reviews'>(35 reviews)</span>
//                                 </div>
//                             </div>

//                         </div>



//                         <div className='card p-3 rounded-md my-3'>
//                             <img className='card-img-top mx-auto' src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-4x3/image.jpg" alt="" />
//                             <div className="card-body flex flex-col">
//                                 <h5 className="card-title text-xl">Domino's</h5>
//                                 <p className="rest_address">
//                                     Ground Floor, MG Metro Station,Karnataka-560001
//                                 </p>
//                                 <div className="ratings mt-auto flex ">
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="tabler:star-half-filled" />
//                                     <Icon icon="clarity:star-line" />
//                                     <span className='no_of_reviews'>(35 reviews)</span>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className='card p-3 rounded-md my-3'>
//                             <img className='card-img-top mx-auto' src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-4x3/image.jpg" alt="" />
//                             <div className="card-body flex flex-col">
//                                 <h5 className="card-title text-xl">Domino's</h5>
//                                 <p className="rest_address">
//                                     Ground Floor, MG Metro Station,Karnataka-560001
//                                 </p>
//                                 <div className="ratings mt-auto flex ">
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="tabler:star-half-filled" />
//                                     <Icon icon="clarity:star-line" />
//                                     <span className='no_of_reviews'>(35 reviews)</span>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className='card p-3 rounded-md my-3'>
//                             <img className='card-img-top mx-auto' src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-4x3/image.jpg" alt="" />
//                             <div className="card-body flex flex-col">
//                                 <h5 className="card-title text-xl">Domino's</h5>
//                                 <p className="rest_address">
//                                     Ground Floor, MG Metro Station,Karnataka-560001
//                                 </p>
//                                 <div className="ratings mt-auto flex ">
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="clarity:star-solid" />
//                                     <Icon icon="tabler:star-half-filled" />
//                                     <Icon icon="clarity:star-line" />
//                                     <span className='no_of_reviews'>(35 reviews)</span>
//                                 </div>
//                             </div>

//                         </div>
//                     </div> */}
//                 </div>
//             </section>

//             {/* <div className='w-full h-screen flex flex-col  '>
//                 <div className="ml-3 mt-5">
//                     <h1 className='text-3xl'>Popular Dishes...</h1>
//                     <div className="flex row">
//                         <div className='col-12 md:col-6 lg:col-3'>
//                             <div className='card p-3 rounded-md my-3'>
//                                 <img className='card-img-top mx-auto' src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-4x3/image.jpg" alt="" />
//                                 <div className="card-body flex flex-col">
//                                     <h5 className="card-title text-xl">Domino's</h5>
//                                     <p className="rest_address">
//                                         Ground Floor, MG Metro Station,Karnataka-560001
//                                     </p>
//                                     <div className="ratings mt-auto flex ">
//                                         <Icon icon="clarity:star-solid" />
//                                         <Icon icon="clarity:star-solid" />
//                                         <Icon icon="clarity:star-solid" />
//                                         <Icon icon="tabler:star-half-filled" />
//                                         <Icon icon="clarity:star-line" />
//                                         <span className='no_of_reviews'>(35 reviews)</span>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>

//                     </div>
//                 </div>
//                 <div className="h-1/2">
//                     <h1 className='text-2xl'> 8 Restaurants</h1>
//                     <div className="flex">
//                         <div className=' mt-5'>
//                             <div className="text-2xl font-semibold mb-5">Title</div>
//                             <div className="w-full flex flex-wrap md:flex-nowrap justify-center sm:justify-between  sm:space-x-4">
//                                 {
//                                     //cardsData will be an array
//                                     // cardsData.map((item) => {
//                                     //     return (
//                                     //         <Card
//                                     //             title={item.title}
//                                     //             description={item.description}
//                                     //             imgUrl={item.imgUrl}
//                                     //         />
//                                     //     )
//                                     // })
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                 </div>


//             </div> */}
