import styled from 'styled-components';

export const ReservationContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ReservationTitleContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ReservationTitleContentContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ResCreateBtn = styled.div`
  width: 22%;
  height: 70%;
  border-radius: 8px;
  box-shadow: -3px 4px 3px 2px #f5f5f4;
  background-color: white;
  border: 0.2px solid #f5f5f4;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ResBtnText = styled.p`
  margin-left: 5px;
  font-size: 100%;
  font-weight: 600;
  color: #fb7500;
`;

export const ResTitleText = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: black;
  text-align: center;
  margin-left: -12%;
`;

export const ReservationContentContainer = styled.div`
  padding: 15px;
  width: 100%;
  flex: 13;
  background-color: #f5f5f4;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

export const ReservationContentBox = styled.div`
  padding: 15px;
  width: 18%;
  height: 45%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 3px 2px rgba(138, 138, 138, 0.398);
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 10px;
`;

export const ReservationInfoRowContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ReservationInfoNameText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: black;
  margin-right: 20px;
`;

export const ReservationPhoneBox = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 50px;
  background-color: white;
  box-shadow: -1px 3px 3px 3px rgba(138, 138, 138, 0.398);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ReservationPhoneText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #a9a4a0;
`;

export const ReservationDateText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const ReservationGuestText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const ReservationTableTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #767676;
`;

export const ReservationTableContentText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const ReservationBtnContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReservationDeleteBtn = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 8px;
  box-shadow: -1px 3px 3px 3px rgba(197, 197, 197, 0.398);
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  &:hover {
    cursor: pointer;
    background-color: #9f9f9f;
    box-shadow: inset -1px 3px 3px 3px rgba(151, 151, 151, 0.398);
  }
`;

export const ReservationSeatedBtn = styled.div`
  width: 70%;
  height: 90%;
  background-color: #e6511c;
  border-radius: 8px;
  box-shadow: -1px 3px 3px 3px rgba(197, 197, 197, 0.398);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #c24619;
    box-shadow: inset -1px 3px 3px 3px #852b0a7e;
  }
`;

export const ReservationSeatedText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
`;
