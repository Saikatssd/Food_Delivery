import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../Actions/menuAction.jsx";
import { getRestaurants } from "../Actions/restaurantAction.jsx";
import Fooditem from './Fooditem.jsx';


export default function Menu(storeId) {

  const { id } = useParams();

  const dispatch = useDispatch();
  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id, storeId]);

  return (
    <div className="w-full">
      {loading ? (
        <p>Loading menus...</p>
      ) :
        error ? (
          <p>Error:{error}</p>
        ) : menus && menus.length > 0 ? (
          menus.map((menu) => (
            <div key={menu._id}>
              <h2 className='text-3xl font-medium m-5'>{menu.category}</h2>
              <hr />
              {
                menu.items && menu.items.length > 0 ? (
                  <div className='row flex flex-wrap gap-6 justify-center items-center'>
                    {menu.items.map((fooditem) => (
                      <Fooditem key={fooditem._id} fooditem={fooditem} />
                    ))}
                  </div>
                ) : (
                  <p>No Fooditems available</p>
                )}
            </div>
          ))
        ) : (
          <p>No menus available</p>
        )}
    </div>
  )
}
