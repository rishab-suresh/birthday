import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;


const BirthdayCard = () => {
  return (
    <CardContainer>
      <h1>Happy Birthday!</h1>
      <p>Wishing you all the best on your special day.</p>
      <p>May all your birthday wishes come true.</p>
    </CardContainer>
  );
};

export default BirthdayCard;