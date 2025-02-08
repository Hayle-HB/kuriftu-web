import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type RoomProps = {
    image: string;
    title: string;
    description: string;
}
type BasicTileProps = {
    room: RoomProps;
    index: number;
    reveresed: boolean
}

const BasicTile: React.FC<BasicTileProps> = ({room, index, reveresed}) => {
    return (
        <Container className="basic-tile-wrapper">
            <Row className={`basic-tile ${reveresed && 'basic-tile-reversed'}`}>
                <Col className="basic-tile-image" md={6}>
                    <img src={room.image} alt={room.title} />
                </Col>

                <Col className="basic-tile-text" md={6}>
                    <h2 className="title-sans">{room.title}</h2>
                    <p>{room.description}</p>
                    <Link to={`${index}`}>Learn More and Book</Link>
                </Col>
            </Row>
        </Container>
    )
}
export default BasicTile;