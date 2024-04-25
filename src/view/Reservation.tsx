import React from 'react';
import { useNavigate } from 'react-router-dom';
import Add from '../assets/icons/add.svg';
import Close from '../assets/icons/close.svg';
import {
  ResBtnText,
  ResCreateBtn,
  ResTitleText,
  ReservationContainer,
  ReservationContentContainer,
  ReservationTitleContainer,
  ReservationTitleContentContainer,
} from '../style/ReservationStyled';
const Reservation = () => {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  return (
    <ReservationContainer>
      <ReservationTitleContainer>
        <ReservationTitleContentContainer>
          <ResCreateBtn onClick={() => goWrite()}>
            <img src={Add} />
            <ResBtnText>New Reservation</ResBtnText>
          </ResCreateBtn>
          <ResTitleText>Reservation</ResTitleText>
          <img src={Close} />
        </ReservationTitleContentContainer>
      </ReservationTitleContainer>
      <ReservationContentContainer></ReservationContentContainer>
    </ReservationContainer>
  );
};

export default Reservation;
