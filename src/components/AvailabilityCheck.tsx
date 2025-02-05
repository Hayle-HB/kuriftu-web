import React, { useState } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import DateAndTimePicker from "./DateAndTimePicker";
import { resortsAll } from "../MockData/resortsAll";
import moment from "moment";
import { useNavigate } from "react-router";

type SearchBarProps = {};
interface Dates {
  checkIn: Date | null;
  checkOut: Date | null;
}

const formatDate = (date: Date | null): string => {
  return moment(date).format("YYYY-MM-DD");
};

const AvailabilityCheck: React.FC<SearchBarProps> = () => {
  const navigate = useNavigate();
  const [dates, setDates] = useState<Dates>({
    checkIn: new Date(),
    checkOut: (() => {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    })(),
  });

  const handleDates = (data: Dates) => {
    setDates(data);
  };

  const [destination, setDestination] = useState("");

  const handleNavigate = () => {
    navigate(
      `/${destination}/rooms?checkin=${formatDate(
        dates.checkIn
      )}&checkout=${formatDate(dates.checkOut)}`
    );
  };

  return (
    <div
      className="search-bar-container"
      style={{
        padding: "0px 2%",
        borderRadius: "5px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Form>
        <Row className="align-items-center">
          {/* Location Select */}
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <InputGroup>
              <Form.Select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-100 select-location"
              >
                <option>Select a destination or hotel</option>
                {resortsAll.map((item) => item.isShow && (
                  <option value={item.slug}>{item.name}</option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>

          {/* Check-in and Check-out */}
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <DateAndTimePicker isShow={false} onSelectAvailability={handleDates} />
          </Col>

          {/* Guests */}
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="2 Adults, 0 Children"
                className="input-guests"
              />
            </InputGroup>
          </Col>

          {/* Special codes */}
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Special codes"
              className="input-codes"
            />
          </Col>

          {/* Search Button */}
          <Col xs={12} md={1} className="text-center">
            {/* <Button
              onClick={handleNavigate}
              style={{ background: "#6E3163",fontSize:'10px',  fontWeight:'normal', lineHeight:'normal', padding:'12px',borderRadius:'20px' }}
              className="w-100 btn-search"
            >
              Search
            </Button> */}
            <Button
            onClick={handleNavigate}
            style={{
              color: "#756363",
              background: "white",
              borderRadius: "8px",
              border: "none",
              padding: "8px 25px",
              textDecoration: "none",
              lineHeight:'normal',
              fontWeight:'400'

            }}
            className="top_nav_btn"
          >
            Search
          </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AvailabilityCheck;
