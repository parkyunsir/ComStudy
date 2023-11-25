import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailViewer from '../components/detail/DetailViewer';
import {restDetail, restRtype, restReviews, restMenu} from '../modules/restaurant';

const DetailContainer = () => {
  const dispatch = useDispatch();
  const {rstId} = useParams();
  const {restaurant, rtype, reviews, menus} = useSelector(({restaurant}) => ({
    restaurant: restaurant.detail,
    rtype: restaurant.rtype,
    reviews: restaurant.reviews,
    menus: restaurant.menus
  }));
  const [success,setSuccess] = useState(true);
  useEffect(() => {
    if(success) {
      dispatch(restDetail(rstId));
      dispatch(restRtype(rstId));
      dispatch(restReviews(rstId));
      dispatch(restMenu(rstId));
      setSuccess(false);
    }
  }, [success, dispatch, rstId]);

  useEffect(() => {
    dispatch(restReviews(rstId));
  }, [reviews]);

  return <DetailViewer restaurant={restaurant} rtype={rtype} reviews={reviews} menus={menus} />;
}

export default React.memo(DetailContainer);