import { Card } from "react-bootstrap";

const CartEmpty = () => {
  return (
    <Card style={{ width: "100%" }} className="text-center shadow-sm">
      <Card.Body>
      <Card.Title style={{ textAlign: "center", fontFamily: "Neue Helvetica Medium", }}>        
        Your Cart is Empty</Card.Title>
       
        <p className="welness-description " style={{fontFamily: "Neue Helvetica Medium "}}>
        Looks like you haven't added anything to your cart yet.
        </p>
      </Card.Body>
    </Card>
  );
};

export default CartEmpty;
