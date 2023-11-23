import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {restRtype, restLikenum, restReviews} from '../modules/restaurant';
import Restaurant from '../components/list/Restaurant';

const RestaurantContainer = ({restaurant}) => {
  const dispatch = useDispatch();
  const {rtype, likenum, reviews} = useSelector(({restaurant}) => ({
      rtype: restaurant.rtype,
      likenum: restaurant.likenum,
      reviews: restaurant.reviews
  }));
  useEffect(() => {
    dispatch(restLikenum(parseInt(restaurant.rstId)));
    dispatch(restReviews(parseInt(restaurant.rstId)));
    dispatch(restRtype(restaurant.typeId));
  }, [dispatch, restaurant, likenum]);

  return <Restaurant restaurant={restaurant} rtype={rtype} likenum={likenum} reviews={reviews} />;
}

export default RestaurantContainer;