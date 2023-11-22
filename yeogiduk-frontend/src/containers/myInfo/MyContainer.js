import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MyViewer from '../../components/myInfo/MyViewer';
import {restaurants, reviews} from '../../modules/myInfo';

const MyContainer = () => {
  const dispatch = useDispatch();
  const {student, myRestaurants, myReviews} = useSelector(({auth, myInfo}) => ({
      student: auth.student,
      myRestaurants: myInfo.restaurantList,
      myReviews: myInfo.reviewList,
    })
  );
  useEffect(() => {
    dispatch(restaurants(student.email));
  }, [dispatch, student]);
  useEffect(() => {
    dispatch(reviews(student.email));
  }, [dispatch, student]);

  return <MyViewer student={student} restaurants={myRestaurants} reviews={myReviews}/>;
};

export default MyContainer;