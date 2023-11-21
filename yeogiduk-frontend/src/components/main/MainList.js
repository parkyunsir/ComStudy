import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainListBox = styled.div`
  position: absolute;
  left: 0;
  top: 30rem;
  bottom: 0;
  right: 0;
  background: #f1f3f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/restaurant/list')//링크
    .then(response => {
      setRestaurants(response.data);
    })
    .catch(error => {
      console.error('data 찾지 못 함', error);
    });
  }, []);

  return (
    <MainListBox>
      <div>
        <h1>Restaurant List:</h1>
        <ul>
          {restaurants.map(restaurant => (
            <li key = {restaurant.rstId}>
              <p>ID: {restaurant.rstId}</p>
              <p>Name: {restaurant.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </MainListBox>
  );

  };
  
export default MainList;