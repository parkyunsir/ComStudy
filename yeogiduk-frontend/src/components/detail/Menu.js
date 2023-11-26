import React from 'react';
import styled from 'styled-components';

const MenuBlock = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom:0.5rem;
`;

const Name = styled.div``;

const Price = styled.div``;

const Menu = ({ menu }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <MenuBlock>
      <>
        <Name>{menu.menu}</Name>
        <Price>{numberWithCommas(menu.price)}원</Price>
      </>
    </MenuBlock>
  );
};

export default Menu;
