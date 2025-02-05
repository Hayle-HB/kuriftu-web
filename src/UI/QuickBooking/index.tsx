// Libraries
import React, { useRef, ReactNode } from "react";
import { Accordion, Card, Button, Form, Col, Container, Row } from "react-bootstrap";
// import DateRangePicker from "./DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

type QuickBookingProps = {
  startDate: string;
  endDate: string;
  guests: number;
  resort: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setGuests: (guests: number) => void;
  setResort: (resort: string) => void;
  onSearch: () => void;
};

const QuickBooking: React.FC<QuickBookingProps> = ({
  startDate,
  endDate,
  guests,
  resort,
  setStartDate,
  setEndDate,
  setGuests,
  setResort,
  onSearch
}) => {
  const CardRef = useRef<HTMLDivElement | null>(null);
  const resorts = [
    { name: "Boston Day Spa", value: "boston" },
    { name: "Kuriftu Resort and Spa Entoto", value: "entoto" },
    { name: "Kuriftu Resort and Spa Awash Falls", value: "awash" },
    { name: "Kuriftu Resort and Spa Bishoftu", value: "beshoftu" },
    { name: "Kuriftu Resort and Spa Lake Tana", value: "awash" },
    { name: "Kuriftu Water Park", value: "water-park" },
  ];
  const selectedResort = resorts.find(r => r.value === resort)?.name || "";
   
  console.log(selectedResort);

  return (
        <Accordion as={Container} className="quick-booking" defaultActiveKey="0" flush fluid>
          <Accordion.Item eventKey="0">
            <Col sm={12}>
              <Accordion.Header>
                  <Col sm={3}>
                    <h3>Reservation Info</h3>
                  </Col>
                   <Col sm={3}>
                    <p><i className="bi bi-calendar3"></i>{' '}<span>{startDate && (dayjs(startDate).format('MMM D, YYYY')+' - ' )}{endDate && dayjs(endDate).format('MMM D, YYYY')}</span></p>
                  </Col>
                   <Col sm={4}>
                    <p><i className="bi bi-geo-alt-fill"></i> {selectedResort}</p>
                  </Col>
                  <Col sm={2}>
                    <p><i className="bi bi-people-fill"></i> {guests}</p>
                  </Col>
              </Accordion.Header>
            </Col>
          <Row>
          <Accordion.Body>
            <Form >
              <Row>
                <Col sm={6} md={5} lg={4}>
                  {/* <DateRangePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} /> */}
                </Col>
                <Col sm={6} md={5} lg={4}>
                  <Row>
                    <Form.Group controlId="resort">
                    <Form.Label>Destination</Form.Label>
                    <Form.Select
                      aria-label="Default"
                      onChange={(e) => setResort(e.target.value)}
                    >
                      {resorts.map((resort) => (
                        <option key={resort.value} value={resort.value}>
                          {resort.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group controlId="guests">
                      <Form.Label>Guests</Form.Label>
                        <Form.Control
                          type="number"
                          min={1}
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                        />                    
                  </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group controlId="search">
                    <Button variant="primary" onClick={onSearch}>
                      Search
                    </Button>
                    </Form.Group>
                  </Row>
                </Col>
                
                </Row>
            </Form>
          </Accordion.Body>
          </Row>   
          </Accordion.Item>
        </Accordion>

  );
};

export default QuickBooking;
