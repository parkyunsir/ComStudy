import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import SearchViewer from '../components/SearchViewer';
import {searchWord} from '../modules/search';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  const word = query.get('word') || "";
  const {restaurants} = useSelector(({search}) => ({
    restaurants: search.restaurants,
  }));
  useEffect(() => {
    if(word) {
      dispatch(searchWord(word));
    }
  }, [dispatch, word]);

  return <SearchViewer word={word} restaurants={restaurants} />;
}

export default SearchContainer;