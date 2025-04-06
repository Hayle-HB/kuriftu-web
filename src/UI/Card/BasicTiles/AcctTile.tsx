import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    images?: string[];
    title: string;
    description?: string;
    headerText: string;
}
type BasicTileProps = {
    item: ItemProps;
    index: number;
    reveresed: boolean;
    hasLinks: boolean;
    linkText?: string;
    linkURL?: string;
}

const AcctTile: React.FC<BasicTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL}) => {
    console.log("Print out");
    console.log(item.images);
    return (
        <Row className="accom-tile">
            <Col lg={8}>
                <Row>
                { item.images && item.images.map((img, i)=>(
                    <Col xs={6} className="accom-tile-img" style={{backgroundImage: `url(${img})`}}></Col>
                ))
                }
                </Row>
            </Col>
            <Col lg={4} className="accom-tile-text">
                <p>{item.description}</p>
                {hasLinks && linkURL && <Link to={linkURL}>{linkText}</Link>}
            </Col>
        </Row>
    )
}
export default AcctTile;