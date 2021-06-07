import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { SectionInfo } from '../styles/styles';
import schedule from '../assets/images/schedule1.png';

function ScheduleSection() {
  return (
    <SectionInfo id="schedule">
      <Container>
        <Row>
          <Col>
            <Image src={schedule} alt="event map" width={1440} height={847} />
          </Col>
        </Row>
      </Container>
    </SectionInfo>
  );
}

export default ScheduleSection;
