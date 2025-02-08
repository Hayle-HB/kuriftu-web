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
}

const BasicTile: React.FC<BasicTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL}) => {
    return (
        <Container className="basic-tile-wrapper">
            <Row className={`basic-tile ${reveresed && 'basic-tile-reversed'}`}>
                <Col className="basic-tile-image" md={6}>
                    <img src={item.image} alt={item.title} />
                </Col>

                <Col className="basic-tile-text" md={6}>
                    <h2 className="title-sans">{item.title}</h2>
                    <p>{item.description}</p>
                    {hasLinks && <Link to={`${linkURL}`}>{linkText}</Link>}
                </Col>
            </Row>
        </Container>
    )
}
export default BasicTile;