import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Close from '../assets/icons/close.svg';
import Event from '../assets/icons/event_available.svg';
import BackArrow from '../assets/icons/keyboard_backspace.svg';
import Minus from '../assets/icons/math-minus.svg';
import Plus from '../assets/icons/math-plus.svg';
import InputComponent from '../components/InputComponent';
import { sampleTable } from '../config/sample';
import {
  GuestControllerBtnContainer,
  GuestControllerContainer,
  GuestCustomContainer,
  GuestValueText,
  MainInputComponent,
  WriteBackBtnContainer,
  WriteBackImg,
  WriteCompleteBtnContainer,
  WriteCompleteBtnText,
  WriteContentContainer,
  WriteFirstInputContainer,
  WriteGuestText,
  WriteHeaderContentContainer,
  WriteHeaderTitleText,
  WriteHeaderWrapContainer,
  WriteResContainer,
  WriteSecondInputContainer,
  WriteSelectDateBtnContainer,
  WriteSelectDatebtnText,
  WriteSelectTableOption,
  WriteSelectTableSelectContainer,
  WriteTextAreaComponent,
  WriteThirdInputContainer,
} from '../style/WriteReservationStyled';

const WriteReservation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState(1);
  const [table, setTable] = useState('Select Table');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  const controllerPlus = () => {
    setGuest(guest + 1);
  };

  const controllerMinus = () => {
    if (guest === 0) {
      setGuest(1);
    } else {
      setGuest(guest - 1);
    }
  };

  const controllerTable = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (table === 'Select Table') {
      setTable('');
      setTable(event.target.value);
    } else {
      setTable(event.target.value);
    }
  };

  const changeContent = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  return (
    <WriteResContainer>
      <WriteHeaderWrapContainer>
        <WriteHeaderContentContainer>
          <WriteBackBtnContainer onClick={() => goHome()}>
            <WriteBackImg src={BackArrow} />
          </WriteBackBtnContainer>
          <WriteHeaderTitleText>New Reservation</WriteHeaderTitleText>
          <img src={Close} />
        </WriteHeaderContentContainer>
      </WriteHeaderWrapContainer>
      <WriteContentContainer>
        <MainInputComponent>
          <WriteFirstInputContainer>
            <InputComponent
              width={27.25}
              borderRadius={15}
              placeholderText="Name"
              essential={true}
            />
            <InputComponent
              width={27.25}
              borderRadius={15}
              placeholderText="Phone"
              essential={true}
            />
            <WriteSelectDateBtnContainer>
              <img src={Event} />
              <WriteSelectDatebtnText>Select Date</WriteSelectDatebtnText>
            </WriteSelectDateBtnContainer>
          </WriteFirstInputContainer>
          <WriteSecondInputContainer>
            <GuestCustomContainer>
              <WriteGuestText>Guests</WriteGuestText>
              <GuestControllerContainer>
                <GuestControllerBtnContainer onClick={() => controllerPlus()}>
                  <img src={Plus} />
                </GuestControllerBtnContainer>
                <GuestValueText>{guest}</GuestValueText>
                <GuestControllerBtnContainer onClick={() => controllerMinus()}>
                  <img src={Minus} />
                </GuestControllerBtnContainer>
              </GuestControllerContainer>
            </GuestCustomContainer>
            <WriteSelectTableSelectContainer
              value={table}
              table={table}
              onChange={event => controllerTable(event)}
            >
              {sampleTable.map((item, index) => (
                <WriteSelectTableOption table={item}>
                  {item}
                </WriteSelectTableOption>
              ))}
            </WriteSelectTableSelectContainer>
          </WriteSecondInputContainer>
          <WriteThirdInputContainer>
            <WriteTextAreaComponent
              placeholder="Add Note..."
              onChange={event => changeContent(event)}
            />
          </WriteThirdInputContainer>
        </MainInputComponent>
        <WriteCompleteBtnContainer>
          <WriteCompleteBtnText>Save</WriteCompleteBtnText>
        </WriteCompleteBtnContainer>
      </WriteContentContainer>
    </WriteResContainer>
  );
};

export default WriteReservation;
