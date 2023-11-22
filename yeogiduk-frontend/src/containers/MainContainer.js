import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MainList from '../components/main/MainList';
import {rankStar, rankLike, rankReview} from '../modules/list';

const MainContainer = () => {
  const dispatch = useDispatch();
  const {starList, likeList, reviewList} = useSelector(({list}) => ({
    starList: list.starRestaurants,
    likeList: list.likeRestaurants,
    reviewList: list.reviewRestaurants,
  }));
  useEffect(() => {
    dispatch(rankStar());
    dispatch(rankLike());
    dispatch(rankReview());
  }, [dispatch]);

  return <MainList starList={starList} likeList={likeList} reviewList={reviewList} />;
}

export default MainContainer;