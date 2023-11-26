import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TestMood from '../components/TestMood';
import { restDetail } from '../modules/restaurant';

const TestMoodContainer = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    mood: "",
    today: "",
    food: ""
  });
  const [error, setError] = useState(null);
  const {restaurant} = useSelector(({restaurant}) => ({
    restaurant: restaurant.detail
  }));
  const [result, setResult] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(!success) {
      setResult(null);
    }
  }, [success]);

  useEffect(() => {
    if(success) {
      setResult(restaurant);
    }
  }, [success, restaurant]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResult(null);
    if(!values.mood || !values.today || !values.food) {
      setError("질문에 모두 답해주세요");
      return;
    }
    var num = [];
    if(values.food === "bab") {
      if(values.mood === "good" || (values.mood === "angry" && values.today === "full")) {
        num = [10, 1, 2, 4, 5, 13, 18];
      }
      else if(values.mood === "sad" || (values.food === "angry" && values.today === "rest")) {
        num = [9, 11, 12, 26, 28, 14, 17];
      }
    }
    else if(values.food === "meon") {
      if(values.mood === "good" || (values.mood === "angry" && values.today === "full")) {
        num = [6, 7, 8, 14, 15];
      }
      else if(values.mood === "sad" || (values.food === "angry" && values.today === "rest")) {
        num = [3, 4, 10, 12, 17, 18];
      }
    }
    else if(values.food === "cafe") {
      if(values.mood === "good" || (values.mood === "angry" && values.today === "full")) {
        num = [19, 20];
      }
      else if(values.mood === "sad" || (values.food === "angry" && values.today === "rest")) {
        num = [21, 22, 23];
      }
    }
    else if(values.food === "simple") {
      if(values.mood === "good" || (values.mood === "angry" && values.today === "full")) {
        num = [9, 16, 24, 25, 27];
      }
      else if(values.mood === "sad" || (values.food === "angry" && values.today === "rest")) {
        num = [20, 11, 10, 12, 23];
      }
    }
    var rstId = num[Math.floor(Math.random() * num.length)];
    console.log(rstId);
    dispatch(restDetail(rstId));
    //setResult(restaurant);
    //console.log(result);
    setSuccess(true);
  };

  return <TestMood handleChange={handleChange} handleSubmit={handleSubmit} error={error} restaurant={result} />;
}

export default TestMoodContainer;