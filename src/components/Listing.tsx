import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ListingProps {
  items: string[];
  size: number;
}

const Listing: React.FC<ListingProps> = ({ size, items }) => {
  const columns: string[][] = [];
  for (let i = 0; i < items.length; i += size) {
    columns.push(items.slice(i, i + size));
  }

  return (
    <Container>
      <Row>
        {columns.map((column, index) => (
          <Col xs={6} sm={6} md={4} key={index}>
            <ul>
              {column.map((item, idx) => (
                <li
                  className="listing-text-sm listing-txt"
                  style={{ textAlign: "left", fontSize:'18px',lineHeight:'24px', fontStyle:'normal',color:'#000',fontFamily:'Neue Helvetica thin', }}
                  key={idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Listing;
