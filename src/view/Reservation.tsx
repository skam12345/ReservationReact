import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Add from '../assets/icons/add.svg';
import Close from '../assets/icons/close.svg';
import Edit from '../assets/icons/edit.svg';
import EventAvailable from '../assets/icons/event_available.svg';
import Group from '../assets/icons/group.svg';
import Phone from '../assets/icons/phone.svg';
import Trash from '../assets/icons/trash.svg';
import {
  ResBtnText,
  ResCreateBtn,
  ResTitleText,
  ReservationBtnContainer,
  ReservationContainer,
  ReservationContentBox,
  ReservationContentContainer,
  ReservationDateText,
  ReservationDeleteBtn,
  ReservationGuestText,
  ReservationInfoNameText,
  ReservationInfoRowContainer,
  ReservationPhoneBox,
  ReservationPhoneText,
  ReservationSeatedBtn,
  ReservationSeatedText,
  ReservationTableContentText,
  ReservationTableTitle,
  ReservationTitleContainer,
  ReservationTitleContentContainer,
} from '../style/ReservationStyled';
const Reservation = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    let content = localStorage.getItem('data');
    let dataList: any[] = [];
    if (content !== null) {
      let dataParse = JSON.parse(content);
      for (let i = 0; i < dataParse.length; i++) {
        let object = JSON.parse(dataParse[i]);
        dataList.push(
          JSON.stringify({
            name: object.name,
            phone: object.phone,
            table: object.table,
            guest: object.guest,
            dateTime: object.dateTime,
            content: object.content,
          }),
        );
      }
      setData(dataList);
    }
  }, []);

  return (
    <ReservationContainer>
      <ReservationTitleContainer>
        <ReservationTitleContentContainer>
          <ResCreateBtn onClick={() => goWrite()}>
            <img src={Add} />
            <ResBtnText>New Reservation</ResBtnText>
          </ResCreateBtn>
          <ResTitleText>Reservation</ResTitleText>
          <img src={Close} />
        </ReservationTitleContentContainer>
      </ReservationTitleContainer>
      <ReservationContentContainer>
        {data.map((item, index) => (
          <ReservationContentBox>
            <ReservationInfoRowContainer>
              <ReservationInfoNameText>
                {JSON.parse(item).name}
              </ReservationInfoNameText>
              <ReservationPhoneBox>
                <img src={Phone} style={{ userSelect: 'none' }} />
                <ReservationPhoneText>
                  {JSON.parse(item).phone}
                </ReservationPhoneText>
              </ReservationPhoneBox>
            </ReservationInfoRowContainer>
            <ReservationInfoRowContainer>
              <img
                src={EventAvailable}
                style={{ userSelect: 'none', marginRight: 8 }}
              />
              <ReservationDateText>
                {JSON.parse(item).dateTime.split(' ')[0] ===
                new Date().toISOString().split('T')[0].substring(0, 10)
                  ? `Today ${
                      Number(
                        JSON.parse(item).dateTime.split('')[1].split(':')[0],
                      ) > 12
                        ? JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[0] +
                          ':' +
                          JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[1] +
                          ' PM'
                        : JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[0] +
                          ':' +
                          JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[1] +
                          ' AM'
                    }`
                  : `${JSON.parse(item)
                      .dateTime.split(' ')[0]
                      .replace('2024-', '')} ${
                      Number(
                        JSON.parse(item).dateTime.split('')[1].split(':')[0],
                      ) > 12
                        ? JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[0] +
                          ':' +
                          JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[1] +
                          ' PM'
                        : JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[0] +
                          ':' +
                          JSON.parse(item)
                            .dateTime.split(' ')[1]
                            .split(':')[1] +
                          ' AM'
                    }`}
              </ReservationDateText>
            </ReservationInfoRowContainer>
            <ReservationInfoRowContainer>
              <img src={Group} style={{ userSelect: 'none', marginRight: 8 }} />
              <ReservationGuestText>
                {JSON.parse(item).guest}
              </ReservationGuestText>
            </ReservationInfoRowContainer>
            <ReservationInfoRowContainer>
              <ReservationTableTitle>
                Reserved Table{' '}
                <b style={{ color: 'black' }}>
                  {JSON.parse(item).table.replace('Table', '')}
                </b>{' '}
                · Floor 1
              </ReservationTableTitle>
            </ReservationInfoRowContainer>
            <ReservationInfoRowContainer>
              <ReservationTableContentText>
                {JSON.parse(item).content}
              </ReservationTableContentText>
              <img src={Edit} style={{ userSelect: 'none' }} />
            </ReservationInfoRowContainer>
            <ReservationBtnContainer>
              <ReservationDeleteBtn>
                <img src={Trash} style={{ userSelect: 'none' }} />
              </ReservationDeleteBtn>
              <ReservationSeatedBtn>
                <ReservationSeatedText>Seated</ReservationSeatedText>
              </ReservationSeatedBtn>
            </ReservationBtnContainer>
          </ReservationContentBox>
        ))}
      </ReservationContentContainer>
    </ReservationContainer>
  );
};

export default Reservation;
