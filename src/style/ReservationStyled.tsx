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
  width: 100%;
  flex: 13;
  background-color: #f5f5f4;
  flex-wrap: wrap;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;
