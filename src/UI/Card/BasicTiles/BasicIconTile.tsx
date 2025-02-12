import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    title: string;
    description: string;
}
type BasicTileProps = {
    item: ItemProps;
    icon: () => JSX.Element;
    reveresed: boolean;
    hasLinks: boolean;
    linkText?: string;
    linkURL?: string;
    half?: boolean;
    third?: boolean;
}

const BasicIconTile: React.FC<BasicTileProps> = ({item, icon, reveresed, hasLinks, linkText, linkURL, half, third}) => {
    return (
        <Col className={`basic-icon-tile-wrapper ${half ? 'basic-icon-tile-half' : ''} ${third ? 'basic-icon-tile-third' : ''}`} md={third ? 4: 6} sm={12}>
            <Row className={`basic-icon-tile ${reveresed && 'basic-icon-tile-reversed'}`}>
                <Col className="basic-icon-tile-image" md={12}>
                    {icon()}
                </Col>

                <Col className="basic-icon-tile-text" md={12}>
                    <h2 className="title-sans">{item.title}</h2>
                    <p>{item.description}</p>
                    {hasLinks && <Link to={`${linkURL}`}>{linkText}</Link>}
                </Col>
            </Row>
        </Col>
    )
}
export default BasicIconTile;