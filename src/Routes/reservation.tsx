import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import QuickBooking from "../UI/QuickBooking";
import {accommodations, Accommodation} from "../Data/accommodations";

export default function ExperiencePage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [resort, setResort] = useState("boston");
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [filteredAccommodations, setFilteredAccommodations] = useState<Accommodation[]>([]);
  
  const fetchAccommodations = async () => {
    // Replace with your data fetching logic
    const data = await fetch("/api/accommodations").then((res) => res.json());
    setAccommodations(data);
  };

  const filterAccommodations = () => {
    let filtered = accommodations;

    if (resort) {
      filtered = filtered.filter(
        (acc) => acc.resort_name.toLowerCase() === resort.toLowerCase()
      );
    }

    // Additional filtering logic can be added here

    setFilteredAccommodations(filtered);
  };

  const onSearch = () => {
    filterAccommodations();
    console.log(resort)
  };

  return (
    <Container fluid className="reservation">
      <QuickBooking
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        guests={guests}
        setGuests={setGuests}
        resort={resort}
        setResort={setResort}
        onSearch={onSearch}
      />
      <Row>
        <h1>{resort}</h1>
        {filteredAccommodations.map((acc, id) => (
          <Col key={id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={acc.image} />
              <Card.Body>
                <Card.Title>{acc.accommodation_name}</Card.Title>
                <Card.Text>{acc.description}</Card.Text>
                <ul>
                  {acc.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Price per night: {acc.price_per_night}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
