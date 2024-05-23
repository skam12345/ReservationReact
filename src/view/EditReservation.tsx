import React, { useCallback, useEffect, useState } from 'react';
import {
  EditBackBtnContainer,
  EditBackImg,
  EditCompleteBtnContainer,
  EditCompleteBtnText,
  EditContentContainer,
  EditFirstInputContainer,
  EditGuestText,
  EditHeaderContentContainer,
  EditHeaderTitleText,
  EditHeaderWrapContainer,
  EditResContainer,
  EditSecondInputContainer,
  EditSelectDateBtnContainer,
  EditSelectDatebtnText,
  EditSelectTableOption,
  EditSelectTableSelectContainer,
  EditTextAreaComponent,
  EditThirdInputContainer,
  GuestControllerBtnContainer,
  GuestControllerContainer,
  GuestCustomContainer,
  GuestValueText,
  MainInputComponent,
} from '../style/EditReservationStyled';

import { useNavigate } from 'react-router-dom';
import { useIdContext } from '../store/context/IdContext';
import SelectDate from './SelectDate';

import Close from '../assets/icons/close.svg';
import Event from '../assets/icons/event_available.svg';
import BackArrow from '../assets/icons/keyboard_backspace.svg';
import Minus from '../assets/icons/math-minus.svg';
import Plus from '../assets/icons/math-plus.svg';
import FieldLegendComponent from '../components/FieldLegendComponent';
import TransparentInput from '../components/TransparentInput';
import { sampleTable } from '../config/sample';

const EditReservation = () => {
  const navigate = useNavigate();
  const context = useIdContext();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState(1);
  const [table, setTable] = useState('Select Table');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState('07:00:00');
  const [date, setDate] = useState(
    new Date().toISOString().split('T')[0].substring(0, 10),
  );
  const goHome = () => {
    navigate('/');
  };

  const controllerPlus = () => {
    setGuest(guest + 1);
  };

  const controllerMinus = useCallback(() => {
    if (guest === 1) {
      return setGuest(1);
    }
    return setGuest(guest - 1);
  }, [guest]);

  const controllerTable = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTable(event.target.value);
  };

  const changeContent = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  const turnOnSelectDate = () => {
    setVisible(!visible);
  };

  const reservationSave = () => {
    let data = localStorage.getItem('data');
    // console.log(data);
    let dataList: any[] = [];
    if (data !== null) {
      let dataParse = JSON.parse(data);
      dataList = dataParse;
      let realList = [];
      for (let i = 0; i < dataList.length; i++) {
        if (i == Number(context.id)) {
          dataList[i] = JSON.stringify({
            id: dataList[i].id,
            name: name,
            phone: phone,
            table: table,
            guest: guest.toString(),
            dateTime: `${date} ${time}`,
            content: content,
          });
          realList.push(dataList[i]);
        }
      }
    }
    localStorage.setItem('data', JSON.stringify(dataList));
    navigate('/');
  };

  useEffect(() => {
    let allList = localStorage.getItem('data');
    if (allList !== null) {
      let allListParse = JSON.parse(allList);
      let id = Number(context.id);
      let content = JSON.parse(allListParse[id]);

      setName(content.name);
      setPhone(content.phone);
      setTable(content.table);
      setContent(content.content);
      setGuest(content.guest);
      let dateTime = content.dateTime;
      setDate(dateTime.split(' ')[0]);
      setTime(dateTime.split(' ')[1]);
    }
  }, []);

  return (
    <>
      <SelectDate
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
        visible={visible}
        setVisible={setVisible}
      />
      <EditResContainer>
        <EditHeaderWrapContainer>
          <EditHeaderContentContainer>
            <EditBackBtnContainer onClick={() => goHome()}>
              <EditBackImg src={BackArrow} />
            </EditBackBtnContainer>
            <EditHeaderTitleText>Edit Reservation</EditHeaderTitleText>
            <img src={Close} />
          </EditHeaderContentContainer>
        </EditHeaderWrapContainer>
        <EditContentContainer>
          <MainInputComponent>
            <EditFirstInputContainer>
              <FieldLegendComponent
                width={20}
                height={60}
                children={
                  <TransparentInput
                    contentValue={name}
                    setContentValue={setName}
                  />
                }
                legendTitle={'Name'}
              />
              <FieldLegendComponent
                width={20}
                height={60}
                children={
                  <TransparentInput
                    contentValue={phone}
                    setContentValue={setPhone}
                  />
                }
                legendTitle={'Phone'}
              />
              <EditSelectDateBtnContainer onClick={() => turnOnSelectDate()}>
                <img src={Event} style={{ userSelect: 'none' }} />
                <EditSelectDatebtnText>Select Date</EditSelectDatebtnText>
              </EditSelectDateBtnContainer>
            </EditFirstInputContainer>
            <EditSecondInputContainer>
              <GuestCustomContainer>
                <EditGuestText>Guests</EditGuestText>
                <GuestControllerContainer>
                  <GuestControllerBtnContainer onClick={() => controllerPlus()}>
                    <img src={Plus} style={{ userSelect: 'none' }} />
                  </GuestControllerBtnContainer>
                  <GuestValueText>{guest}</GuestValueText>
                  <GuestControllerBtnContainer
                    onClick={() => controllerMinus()}
                  >
                    <img src={Minus} style={{ userSelect: 'none' }} />
                  </GuestControllerBtnContainer>
                </GuestControllerContainer>
              </GuestCustomContainer>
              <EditSelectTableSelectContainer
                value={table}
                table={table}
                onChange={event => controllerTable(event)}
              >
                {sampleTable.map((item, index) => (
                  <EditSelectTableOption table={item}>
                    {item}
                  </EditSelectTableOption>
                ))}
              </EditSelectTableSelectContainer>
            </EditSecondInputContainer>
            <EditThirdInputContainer>
              <EditTextAreaComponent
                placeholder="Add Note..."
                onChange={event => changeContent(event)}
              />
            </EditThirdInputContainer>
          </MainInputComponent>
          <EditCompleteBtnContainer onClick={() => reservationSave()}>
            <EditCompleteBtnText>Save</EditCompleteBtnText>
          </EditCompleteBtnContainer>
        </EditContentContainer>
      </EditResContainer>
    </>
  );
};

export default EditReservation;
