import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {restDetail} from '../../modules/restaurant';
import ReviewItem from '../../components/myInfo/ReviewItem';

const ReviewContainer = ({review}) => {
  const dispatch = useDispatch();
  const {reviewRestaurant} = useSelector(({restaurant}) => ({
    reviewRestaurant: restaurant.detail
  }));
  useEffect(() => {
    dispatch(restDetail(parseInt(review.rstId)));
  }, [dispatch, review]);

  return <ReviewItem review={review} reviewRestaurant={reviewRestaurant} />;
}

export default ReviewContainer;