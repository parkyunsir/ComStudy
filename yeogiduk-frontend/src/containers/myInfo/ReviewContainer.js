import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {detail} from '../../modules/restaurant';
import ReviewItem from '../../components/myInfo/ReviewItem';

const ReviewContainer = ({review}) => {
  const dispatch = useDispatch();
  const {reviewRestaurant} = useSelector(({restaurant}) => ({
    reviewRestaurant: restaurant.detail
  }));
  useEffect(() => {
    dispatch(detail(parseInt(review.rstId)));
  }, [dispatch, review]);

  return <ReviewItem review={review} reviewRestaurant={reviewRestaurant} />;
}

export default ReviewContainer;