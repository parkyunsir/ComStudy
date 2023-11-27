import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import { sortList, typeList } from '../modules/list';
import Restaurant from './list/Restaurant';
import { TbStarFilled, TbHeartFilled, TbMessage2 } from "react-icons/tb";
import { FaSortAmountDown } from "react-icons/fa";
import { PiForkKnifeBold } from "react-icons/pi";

const GrayBackground = styled.div`
  background: #f1f3f5;
  height:100%;
  width:100%;
  padding-bottom:2rem;
  padding-top:1rem;
`;

const ListBlock = styled(Responsive)`
  margin-top: 5rem;
`;

const WhiteBox = styled.div`
background: white;
// background: #f1f3f5;
padding-left:1rem;
padding-right:1rem;
padding-bottom:0.5rem;
padding-top:1rem;
margin-top:1rem;
height:auto;
::-webkit-scrollbar {
  display: none;
}
`;

const ButtonBox = styled.div`
  font-size:13px;
`;

const Horizon = styled.div`
  display:flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: ${props => (props.isActive ? '#f87f9c' : 'white')};
  color: ${props => (props.isActive ? 'white' : 'black')};
  border: 0.05rem solid gray; /* 아주 작은 border 추가 및 회색 설정 */
  padding: 4px 6px;  // 버튼에 적절한 패딩 값도 설정해주세요.
  margin-right:1rem;
  margin-bottom:1rem;
  font-size:11px;
  border-radius: 8px;
`;

const Context = styled.div`
  overflow-y:scroll;
  height: 41.3rem;
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
    setTypeButton(parseInt(values.typeId));
    setSortButton(values.sort);
  }, [dispatch, values]);

  useEffect(() => {}, [restaurants]);

  return (
    <GrayBackground>
    <ListBlock>
      <WhiteBox>
        <Horizon>
          {/* 정렬순으로 정렬 */}
        <ButtonBox>
          <FaSortAmountDown/>정렬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button name="sort" value="star" onClick={handleChange} 
            isActive={sortButton === "star"}><TbStarFilled/>&nbsp;별점순</Button>
          <Button name="sort" value="like" onClick={handleChange}
            isActive={sortButton === "like"}><TbHeartFilled/>&nbsp;찜순</Button>
          <Button name="sort" value="review" onClick={handleChange} 
            isActive={sortButton === "review"}><TbMessage2/>&nbsp;리뷰순</Button>
        </ButtonBox>

        {/* 음식종류 별로 정렬 */}
        <ButtonBox>
          {types && (
            <div>
              <PiForkKnifeBold/>음식종류&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button name="typeId" value={0} onClick={handleChange}
                isActive={typeButton === 0}>전체</Button>
              {types.map(type => (
                <Button name="typeId" value={type.typeId} onClick={handleChange}
                  isActive={typeButton === type.typeId}>{type.title}</Button>
              ))}
            </div>
          )}
        </ButtonBox>
        </Horizon>
      </WhiteBox>

      {/* 가게 출력 */}
      <WhiteBox>
        <div className="box">
          {restaurants && (
            <Context>
            <div>
              {restaurants.map(restaurant => (
                <Restaurant key={restaurant.id} restaurant={restaurant} >
                  
                </Restaurant>
              ))}
            </div>
            </Context>
          )}
        </div>
      </WhiteBox>
    </ListBlock>
    </GrayBackground>
  )
}

export default ListViewer;