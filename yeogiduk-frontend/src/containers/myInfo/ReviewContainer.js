import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {restDetail} from '../../modules/restaurant';
import ReviewItem from '../../components/myInfo/ReviewItem';

const ReviewContainer = ({review}) => {
  const dispatch = useDispatch();
  const {restaurant} = useSelector(({restaurant}) => ({
    restaurant: restaurant.detail
  }));
  useEffect(() => {
    dispatch(restDetail(parseInt(review.rstId)));
  }, [dispatch, review]);

  return <ReviewItem review={review} restaurant={restaurant} />;
}

export default ReviewContainer;