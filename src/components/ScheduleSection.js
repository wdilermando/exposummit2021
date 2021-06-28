import React from 'react';
// import ModalImage from 'react-modal-image';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import { SectionInfo } from '../styles/styles';
// import schedule from '../assets/images/schedule.jpg';

const localizer = momentLocalizer(moment);

function ScheduleSection() {
  const myEventsList = [
    {
      events: [
        {
          start: moment().toDate(),
          end: moment().add(1, 'days').toDate(),
          title: 'Some title',
        },
      ],
    },
  ];
  return (
    <SectionInfo id="schedule">
      <Container>
        {/* <ModalImage small={schedule} large={schedule} alt="event map" /> */}
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Container>
    </SectionInfo>
  );
}

export default ScheduleSection;
