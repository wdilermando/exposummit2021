import React from 'react';
import ModalImage from 'react-modal-image';
import { Container } from 'react-bootstrap';
import { SectionInfo } from '../styles/styles';
import schedule from '../assets/images/schedule1.png';

function ScheduleSection() {
  return (
    <SectionInfo id="schedule">
      <Container>
        <ModalImage small={schedule} large={schedule} alt="event map" />
      </Container>
    </SectionInfo>
  );
}

export default ScheduleSection;
