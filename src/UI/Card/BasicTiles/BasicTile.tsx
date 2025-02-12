import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    image?: string;
    title: string;
    description: string;
}
type BasicTileProps = {
    item: ItemProps;
    index: number;
    reveresed: boolean;
    hasLinks: boolean;
    linkText?: string;
    linkURL?: string;
    half?: boolean;
    third?: boolean;
}

const BasicTile: React.FC<BasicTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL, half, third}) => {
    const sizeDown = half || third;
    return (
        <Container className={`basic-tile-wrapper ${half ? 'basic-tile-half' : ''} ${third ? 'basic-tile-third' : ''}`}>
            <Row className={`basic-tile ${reveresed && 'basic-tile-reversed'}`}>
                <Col className="basic-tile-image" md={sizeDown ? 12 : 6}>
                    <img src={item.image} alt={item.title} />
                </Col>

                <Col className="basic-tile-text" md={sizeDown ? 12 : 6}>
                    <h2 className="title-sans">{item.title}</h2>
                    <p>{item.description}</p>
                    {hasLinks && <Link to={`${linkURL}`}>{linkText}</Link>}
                </Col>
            </Row>
        </Container>
    )
}
export default BasicTile;