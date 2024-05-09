import styled from 'styled-components';

export const TimeColumnControllerContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TimeControl = styled.div`
  width: 100%;
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
  }
`;

export const TimeValueBox = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const TimeValueText = styled.p`
  font-size: 2em;
  font-weight: 600;
`;
