import styled from 'styled-components';
import DropDownArrow from '../assets/icons/arrow_drop_down.svg';

export const EditResContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditHeaderWrapContainer = styled.div`
  width: 100%;
  flex: 1;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EditHeaderContentContainer = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EditBackBtnContainer = styled.div`
  width: 65px;
  height: 65px;
  border: 1px solid #f4f4f5;
  border-radius: 18px;
  box-shadow: 5px 2px 5px #f4f4f5;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

export const EditBackImg = styled.img``;

export const EditHeaderTitleText = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: black;
  text-align: center;
`;

export const EditContentContainer = styled.div`
  width: 100%;
  flex: 7;
  border-radius: 0px 0px 20px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainInputComponent = styled.div`
  width: 98%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const EditFirstInputContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EditSelectDateBtnContainer = styled.div`
  width: 35.25%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #f4f4f5;
  box-shadow: -3px 4px 3px 2px #f5f5f4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f4;
    box-shadow: inset -3px 4px 3px 2px #d1d1d0;
  }
`;

export const EditSelectDatebtnText = styled.p`
  margin-left: 3px;
  font-size: 24px;
  font-weight: 600;
  color: black;
  user-select: none;
`;

export const EditSecondInputContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GuestCustomContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EditGuestText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

export const GuestControllerContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GuestControllerBtnContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #f4f4f5;
  box-shadow: -3px 4px 3px 2px #f5f5f4;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f4;
    box-shadow: inset -3px 4px 3px 2px #d1d1d0;
  }
`;

export const EditSelectTableSelectContainer = styled.select<{
  table: string;
}>`
  width: 50%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #c8c8c8;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.table === 'Select Table' ? '#aeaeae' : 'black')};
  appearance: none;
  -webkit-appearance: none; /* 사파리, 크롬 하위버전용 */
  -moz-appearance: none; /* 사파리, 크롬 하위버전용 */
  background-image: url(${DropDownArrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  user-select: none;
`;

export const EditSelectTableOption = styled.option<{
  table: string;
}>`
  padding-left: 20px;
  font-size: 18px;
  color: ${props => (props.table === 'Select Table' ? '#aeaeae' : 'black')};
`;

export const GuestValueText = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: black;

  user-select: none;
`;

export const EditThirdInputContainer = styled.div`
  width: 100%;
  height: 240px;
  border: 1px solid black;
`;

export const EditTextAreaComponent = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #f5f5f4;
  box-shadow: -3px 4px 3px 2px #f5f5f4;
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export const EditCompleteBtnContainer = styled.div`
  width: 98%;
  height: 15%;
  border-radius: 8px;
  background-color: #e15e32;
  margin-bottom: 1.2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditCompleteBtnText = styled.p`
  font-size: 150%;
  font-weight: 600;
  color: white;
  text-align: center;
`;
