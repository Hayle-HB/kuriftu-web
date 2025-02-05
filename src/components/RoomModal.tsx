import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

interface RoomModalProps {
  show: boolean;
  onClose: () => void;
  onAddRoom: (guests: GuestCounts) => void;
}

const RoomModal: React.FC<RoomModalProps> = ({ show, onClose, onAddRoom }) => {
  const [guests, setGuests] = useState({ adults: 0, teens: 0, kids: 0 });

  const handleGuestChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    setGuests({ ...guests, [type]: Number(e.target.value) });
  };

  const handleAddRoom = () => {
    onAddRoom(guests);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="room-card-heading">Add Guests</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-custom">
        <img
          src="https://kurifturesorts.com/_nuxt/img/Glamping.a03f5c8.webp"
          alt="Room"
          style={{width:"100%", height:"100%"}}
          className="mb-3"
        />
        <p className="text-center fw-bold room-card-txt">
          In order to reserve a room, make sure to choose at least one.
        </p>
        <hr />
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label className="room-card-label">Adults</Form.Label>
                <Form.Select
                  value={guests.adults}
                  onChange={(e) => handleGuestChange(e, "adults")}
                >
                  {[...Array(2)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="room-card-label">Teens (12-17)</Form.Label>
                <Form.Select
                  disabled
                  value={guests.teens}
                  onChange={(e) => handleGuestChange(e, "teens")}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="room-card-label">Kids</Form.Label>
                <Form.Select
                  disabled
                  value={guests.kids}
                  onChange={(e) => handleGuestChange(e, "kids")}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <hr />
      </Modal.Body>
      <Modal.Footer>
        <Button className="room-card-label" variant="warning" onClick={handleAddRoom}>
          Add Room
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomModal;
