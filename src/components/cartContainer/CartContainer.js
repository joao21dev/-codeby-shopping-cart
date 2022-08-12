import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  background-color: #fff;
  height: 800px;
  width: 500px;
  box-shadow: 0px 0px 3px 5px #d7d7d7;
`;

const CartContainer = () => {
  return <Container></Container>;
};

export default CartContainer;
