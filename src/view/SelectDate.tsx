import React, { useState } from 'react';
import {
  SelectDateContainer,
  SelectDateInnerContainer,
  SelectDateInputContent,
  SelectDateMaskingContainer,
  SelectDateRowContentContainer,
  SelectTimeInputContent,
  TimeControllerDelete,
  TimeControllerRowButtonContainer,
  TimeControllerSave,
  TimeControllerSaveText,
  TimeRowControllerContainer,
} from '../style/SelectDateStyled';

import Alarm from '../assets/icons/alarm_on.svg';
import Today from '../assets/icons/today.svg';
import Trash from '../assets/icons/trash.svg';
import TimeController from '../components/TimeController';

interface argsProps {
  time: any;
  setTime: Function;
  date: any;
  setDate: Function;
  visible: boolean;
  setVisible: Function;
}

const SelectDate = ({
  time,
  setTime,
  date,
  setDate,
  visible,
  setVisible,
}: argsProps) => {
  const [hour, setHour] = useState('07');
  const [min, setMin] = useState('00');
  const [current, setCurrent] = useState('AM');

  const changeFormatTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value + ':00');
    setHour(event.target.value.substring(0, 2));
    setMin(event.target.value.substring(3, 5));
    if (Number(event.target.value.substring(0, 2)) >= 12) {
      setCurrent('PM');
    } else {
      setCurrent('AM');
    }
  };

  const changeFormatDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const closeDelete = () => {
    setTime('07:00:00');
    setDate(new Date().toISOString().split('T')[0].substring(0, 10));
    setVisible(!visible);
  };

  const saveTimeDate = () => {
    setTime(time);
    setDate(date);
    setVisible(!visible);
  };

  return (
    <SelectDateMaskingContainer visible={visible}>
      <SelectDateContainer>
        <SelectDateInnerContainer>
          <SelectDateRowContentContainer>
            <img src={Alarm} style={{ userSelect: 'none' }} />
            <SelectTimeInputContent
              type="time"
              min="09:00"
              max="24:00"
              value={time}
              onChange={event => changeFormatTime(event)}
            />
          </SelectDateRowContentContainer>
          <SelectDateRowContentContainer>
            <img src={Today} style={{ userSelect: 'none' }} />
            <SelectDateInputContent
              type="date"
              min={'2024-05-07'}
              max={'2024-12-31'}
              value={date}
              onChange={event => changeFormatDate(event)}
            />
          </SelectDateRowContentContainer>
          <TimeRowControllerContainer>
            <TimeController
              times={time}
              setTime={setTime}
              value={hour}
              setCurrent={setCurrent}
              setValue={setHour}
              hour={undefined}
              setHour={undefined}
              type={'hour'}
            />
            <TimeController
              times={time}
              setTime={setTime}
              value={min}
              setCurrent={setCurrent}
              setValue={setMin}
              hour={hour}
              setHour={setHour}
              type={'min'}
            />
            <TimeController
              times={time}
              setTime={setTime}
              value={current}
              setCurrent={setCurrent}
              setValue={setCurrent}
              hour={hour}
              setHour={setHour}
              type={'current'}
            />
          </TimeRowControllerContainer>
          <TimeControllerRowButtonContainer>
            <TimeControllerDelete onClick={() => closeDelete()}>
              <img src={Trash} style={{ userSelect: 'none' }} />
            </TimeControllerDelete>
            <TimeControllerSave onClick={() => saveTimeDate()}>
              <TimeControllerSaveText>Save</TimeControllerSaveText>
            </TimeControllerSave>
          </TimeControllerRowButtonContainer>
        </SelectDateInnerContainer>
      </SelectDateContainer>
    </SelectDateMaskingContainer>
  );
};

export default SelectDate;
