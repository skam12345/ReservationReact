import styled from 'styled-components';

export const SelectDateMaskingContainer = styled.div<{ visible: boolean }>`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #979797c9;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectDateContainer = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 20px;
  flex-direction: column;
  padding: 15px;
  &:after {
    content: '';
    display: block;
    padding-bottom: 70%;
  }
`;

export const SelectDateInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectDateRowContentContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const SelectTimeInputContent = styled.input.attrs({ type: 'time' })`
  width: 85%;
  height: 90%;
  border: 1px solid #cfcece;
  border-radius: 8px;
  font-size: 30px;
  &:focus {
    border-color: #fa8054;
    outline: #fa8054;
    border-width: 2px;
  }
`;

export const SelectDateInputContent = styled.input.attrs({ type: 'date' })`
  width: 85%;
  height: 90%;
  border: 1px solid #cfcece;
  border-radius: 8px;
  font-size: 30px;
  font-weight: 500;
  &:focus {
    border-color: #fa8054;
    outline: #fa8054;
    border-width: 2px;
  }
`;

export const TimeRowControllerContainer = styled.div`
  width: 70%;
  height: 36%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeControllerRowButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const TimeControllerDelete = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  box-shadow: 5px 2px 5px #b2b2b2;
  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
    box-shadow: inset 5px 2px 5px #b4b4b4;
  }
`;

export const TimeControllerSave = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #e34f1a;
  box-shadow: 5px 2px 5px #b2b2b2;
  &:hover {
    cursor: pointer;
    background-color: #c04516;
    box-shadow: inset 5px 2px 5px #ff23239c;
  }
`;

export const TimeControllerSaveText = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
`;
