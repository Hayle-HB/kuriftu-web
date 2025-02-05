import React from "react";
import { Card } from "react-bootstrap";
import { useRoomContext } from "../context/RoomContext";

interface CartItemProps {
  title: string;
  checkIn?: string | null;
  checkOut?: string | null;
  guests: {
    adults: number;
    teens: number;
    kids: number;
  };
  total: number;
  roomId: number;
  isShowDelete: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  checkIn,
  checkOut,
  guests,
  total,
  roomId,
  isShowDelete,
}) => {
  const { onDelete } = useRoomContext();
  return (
    <Card className="mb-4 shadow-sm" style={{ textAlign: "left" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="fw-bold section-header-font text-center" style={{fontFamily: "Neue Helvetica Medium",}}>{title}</Card.Title>
          {isShowDelete && (
            <span
              role="button"
              className="text-danger fw-bold"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={() => onDelete(roomId)}
            >
              &#x2716;
            </span>
          )}
        </div>
        <hr />

        <div className="d-flex justify-content-between">
          <div>
            <strong style={{fontFamily: "Neue Helvetica Medium",}}>Check Out</strong>
            <p style={{fontFamily: "Neue Helvetica thin",}}>{checkOut}</p>
          </div>

          <div>
            <strong style={{fontFamily: "Neue Helvetica Medium",}}>Check In</strong>
            <p style={{fontFamily: "Neue Helvetica thin",}}>{checkIn}</p>
          </div>
        </div>

        <div className="mt-1">
          <strong style={{fontFamily: "Neue Helvetica Medium",}}>Guests</strong>
          <p style={{fontFamily: "Neue Helvetica thin",}}>
            {guests.adults} Adults {guests.teens} Teen {guests.kids} Kids
          </p>
        </div>

        <span className="float-end">${total.toFixed(2)}</span>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
