import React, { useEffect, useState } from 'react';
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
import SelectDate from './SelectDate';

const WriteReservation = () => {
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
  const [able, setAble] = useState(false);
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

  const turnOnSelectDate = () => {
    setVisible(!visible);
  };

  const reservationSave = () => {
    let data = localStorage.getItem('data');
    // console.log(data);
    let dataList: any[] = [];
    if (data !== null) {
      let dataParse = JSON.parse(data);
      for (let i = 0; i < dataParse.length; i++) {
        let object = JSON.parse(dataParse[i]);
        dataList.push(
          JSON.stringify({
            id: object.id,
            name: object.name,
            phone: object.phone,
            table: object.table,
            guest: object.guest,
            dateTime: object.dateTime,
            content: object.content,
          }),
        );
      }
    }
    dataList.push(
      JSON.stringify({
        id: dataList.length + 1,
        name: name,
        phone: phone,
        table: table,
        guest: guest.toString(),
        dateTime: `${date} ${time}`,
        content: content,
      }),
    );
    localStorage.setItem('data', JSON.stringify(dataList));
    navigate('/');
  };

  useEffect(() => {
    if (
      name !== '' &&
      phone !== '' &&
      table !== 'Select Table' &&
      content != ''
    ) {
      setAble(true);
    } else {
      setAble(false);
    }
  }, [name, phone, table, content]);

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
                setData={setName}
              />
              <InputComponent
                width={27.25}
                borderRadius={15}
                placeholderText="Phone"
                essential={true}
                setData={setPhone}
              />
              <WriteSelectDateBtnContainer onClick={() => turnOnSelectDate()}>
                <img src={Event} style={{ userSelect: 'none' }} />
                <WriteSelectDatebtnText>Select Date</WriteSelectDatebtnText>
              </WriteSelectDateBtnContainer>
            </WriteFirstInputContainer>
            <WriteSecondInputContainer>
              <GuestCustomContainer>
                <WriteGuestText>Guests</WriteGuestText>
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
          <WriteCompleteBtnContainer
            able={able}
            onClick={() => reservationSave()}
          >
            <WriteCompleteBtnText able={able}>Save</WriteCompleteBtnText>
          </WriteCompleteBtnContainer>
        </WriteContentContainer>
      </WriteResContainer>
    </>
  );
};

export default WriteReservation;
