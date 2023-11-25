import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListViewer from '../components/ListViewer';
import { sortList } from '../modules/list';

const ListContainer = ({sort, typeId}) => {
  const dispatch = useDispatch();
  const {restaurants} = useSelector(({list}) => ({
    restauratns: list.sortRestaurants
  }));
  //const [typeId, setTypeId] = useState(null);
  useEffect(() => {
    dispatch(sortList(sort, typeId));
  })
  return <ListViewer restaurants={restaurants} />;
}

export default ListContainer;