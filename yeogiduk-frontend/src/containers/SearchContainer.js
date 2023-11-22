import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import SearchViewer from '../components/SearchViewer';

const SearchContainer = () => {
  const {restaurants} = useSelector(({search}) => ({
    restaurants: search.restaurants
  }));
  const word = localStorage.getItem('word');
  useEffect(() => {
    if(restaurants) {
      console.log(restaurants);
    }
  });

  return <SearchViewer word={word} restaurants={restaurants} />;
}

export default SearchContainer;