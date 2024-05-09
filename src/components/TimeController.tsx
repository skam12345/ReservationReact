import React from 'react';
import DownControl from '../assets/icons/chevron-down.svg';
import UpControl from '../assets/icons/chevron-up.svg';
import {
  TimeColumnControllerContainer,
  TimeControl,
  TimeValueBox,
  TimeValueText,
} from './style/TimeControllerStyled';

interface argsProps {
  times: String;
  setTime: Function;
  value: String;
  setValue: Function;
  setCurrent: Function | undefined;
  hour: String | undefined;
  setHour: Function | undefined;
  type: String;
}
const TimeController = ({
  times,
  setTime,
  value,
  setValue,
  setCurrent,
  hour,
  setHour,
  type,
}: argsProps) => {
  const checkNumber = (value: String) => {
    let time = 0;
    try {
      time = Number(value);
    } catch (e) {
      time = Number(value.substring(1, 2));
    }
    return time;
  };

  const checkAfterReturn = (time: number) => {
    return time < 10 && time !== 10 ? '0' + time.toString() : time.toString();
  };

  const checkAfterTime = (
    time: number,
    hour: number | undefined,
    type: String,
  ) => {
    if (type === 'hour') {
      time < 10 && time !== 10
        ? setTime(times.replace(times.substring(0, 2), '0' + time.toString()))
        : setTime(times.replace(times.substring(0, 2), time.toString()));
    } else {
      let data = times;
      data =
        time < 10 && time !== 10
          ? data.split(':')[0] +
            ':' +
            data
              .split(':')[1]
              .replace(times.substring(3, 5), '0' + time.toString()) +
            ':' +
            data.split(':')[2]
          : data.replace(times.substring(3, 5), time.toString());
      if (hour) {
        hour < 10 && hour !== 10
          ? setTime(
              data
                .split(':')[0]
                .replace(times.substring(0, 2), '0' + hour.toString()) +
                ':' +
                data.split(':')[1] +
                ':' +
                data.split(':')[2],
            )
          : setTime(data.replace(times.substring(0, 2), hour.toString()));
      } else {
        setTime(data);
      }
    }
  };

  const currentLogic = (value: String) => {
    if (setCurrent) {
      setCurrent(value);
      if (value === 'PM') {
        if (hour && setHour) {
          let time = checkNumber(hour);
          time = time + 12;
          if (time === 24) {
            setHour(checkAfterReturn(time));
            time = 0;
          } else {
            setHour(checkAfterReturn(time));
          }
          checkAfterTime(time, undefined, 'hour');
        }
      } else {
        if (hour && setHour) {
          let time = checkNumber(hour);
          time = time - 12;
          setHour(checkAfterReturn(time));
          checkAfterTime(time, undefined, 'hour');
        }
      }
    }
  };

  const changeCurrentHourLogic = (time: number) => {
    if (time > 11) {
      currentLogic('PM');
    } else {
      currentLogic('AM');
    }
  };

  const hourLogic = (time: number, value: number, type: String) => {
    changeCurrentHourLogic(time);
    if (type === 'plus') {
      if (value === 23) {
        setValue('00');
        time = 0;
        setTime(times.replace(times.substring(0, 2), '0' + time.toString()));
      } else {
        checkAfterTime(time, undefined, 'hour');
      }
    } else {
      if (value === 0) {
        setValue('24');
        time = 0;
        setTime(times.replace(times.substring(0, 2), '0' + time.toString()));
      } else {
        checkAfterTime(value, undefined, 'hour');
      }
    }
  };

  const minLogic = (time: number, type: String) => {
    if (type === 'plus') {
      if (time === 60) {
        time = 0;
        setValue('00');
        if (hour && setHour) {
          let tHour = checkNumber(hour) + 1;
          changeCurrentHourLogic(tHour);
          if (tHour === 23) {
            setHour('00');
          } else {
            tHour < 10 && tHour !== 10
              ? setHour('0' + tHour.toString())
              : setHour(tHour.toString());
          }
        }
      } else {
        checkAfterTime(time, undefined, 'min');
      }
    } else {
      if (time <= 0) {
        time = 59;
        setValue('59');
        if (hour && setHour) {
          let tHour = checkNumber(hour) - 1;
          changeCurrentHourLogic(tHour);
          if (tHour === 0) {
            setHour('23');
          } else {
            tHour < 10 && tHour !== 10
              ? setHour('0' + tHour.toString())
              : setHour(tHour.toString());
            checkAfterTime(time, tHour, 'min');
          }
        }
      } else {
        checkAfterTime(time, undefined, 'min');
      }
    }
  };

  const plusLogic = (value: number, type: String) => {
    let time = value + 1;
    time < 10 && time !== 10
      ? setValue('0' + time.toString())
      : setValue(time.toString());
    if (type === 'hour') {
      hourLogic(time, value, 'plus');
    } else if (type === 'min') {
      minLogic(time, 'plus');
    }
    return time;
  };

  const minusLogic = (value: number, type: String) => {
    let time = value - 1;
    time < 10 && time !== 10
      ? setValue('0' + time.toString())
      : setValue(time.toString());
    if (type === 'hour') {
      hourLogic(time, value, 'minus');
    } else if (type === 'min') {
      minLogic(time, 'minus');
    }
    return time;
  };
  const upController = () => {
    let time = 0;
    if (type === 'hour') {
      time = checkNumber(value);
      plusLogic(time, 'hour');
    } else if (type === 'min') {
      time = checkNumber(value);
      time = plusLogic(time, 'min');
    } else {
      value === 'AM' ? currentLogic('PM') : currentLogic('AM');
    }
  };

  const DownController = () => {
    let time = 0;
    if (type === 'hour') {
      time = checkNumber(value);
      minusLogic(time, 'hour');
    } else if (type === 'min') {
      time = checkNumber(value);
      minusLogic(time, 'min');
    } else {
      value === 'AM' ? currentLogic('PM') : currentLogic('AM');
    }
  };
  return (
    <TimeColumnControllerContainer>
      <TimeControl onClick={() => upController()}>
        <img src={UpControl} style={{ userSelect: 'none' }} />
      </TimeControl>
      <TimeValueBox>
        <TimeValueText>{value}</TimeValueText>
      </TimeValueBox>
      <TimeControl onClick={() => DownController()}>
        <img src={DownControl} style={{ userSelect: 'none' }} />
      </TimeControl>
    </TimeColumnControllerContainer>
  );
};

export default TimeController;
