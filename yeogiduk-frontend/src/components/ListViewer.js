import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import { sortList, typeList } from '../modules/list';
import Restaurant from './list/Restaurant';

const ListBlock = styled(Responsive)`
  margin-top: 5rem;
`;

const WhiteBox = styled.div``;

const ButtonBox = styled.div``;

const Button = styled.button`
  background-color: ${props => (props.isActive ? 'green' : 'white')};
`;

const ListViewer = () => {
  const [sortButton, setSortButton] = useState(null);
  const [typeButton, setTypeButton] = useState(0);
  const dispatch = useDispatch();
  const {restaurants, types} = useSelector(({list}) => ({
    restaurants: list.sortRestaurants,
    types: list.types,
  }));
  const [values, setValues] = useState({
    sort: "all",
    typeId: 0,
  });
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    if(success) {
      dispatch(typeList());
      setSuccess(false);
    }
  }, [dispatch, success]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    dispatch(sortList(values));
    setSortButton(values.sort);
    setTypeButton(parseInt(values.typeId));
  }, [dispatch, values]);

  useEffect(() => {}, [restaurants]);

  return (
    <ListBlock>
      <WhiteBox>
        <ButtonBox>
          <Button name="sort" value="star" onClick={handleChange} 
            isActive={sortButton === "star"}>별점순</Button>
          <Button name="sort" value="like" onClick={handleChange}
            isActive={sortButton === "like"}>찜순</Button>
          <Button name="sort" value="review" onClick={handleChange} 
            isActive={sortButton === "review"}>리뷰순</Button>
        </ButtonBox>
        <ButtonBox>
          {types && (
            <div>
              <Button name="typeId" value={0} onClick={handleChange}
                isActive={typeButton === 0}>전체</Button>
              {types.map(type => (
                <Button name="typeId" value={type.typeId} onClick={handleChange}
                  isActive={typeButton === type.typeId}>{type.title}</Button>
              ))}
            </div>
          )}
        </ButtonBox>
      </WhiteBox>
      <WhiteBox>
        <div className="box">
          {restaurants && (
            <div>
              {restaurants.map(restaurant => (
                <Restaurant key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </WhiteBox>
    </ListBlock>
  )
}

export default ListViewer;