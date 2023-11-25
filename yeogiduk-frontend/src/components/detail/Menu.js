import React from 'react';
import styled from 'styled-components';

const MenuBlock = styled.div``;

const Name = styled.div``;

const Price = styled.div``;

const Menu = ({ menu }) => {
  return (
    <MenuBlock>
        <>
          <Name>{menu.menu}</Name>
          <Price>{menu.price}원</Price>
        </>
    </MenuBlock>
  );
};

export default Menu;
