import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    image?: string;
    title: string;
    description: string;
    subtitle?: string;
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
    fourth?: boolean;
    square?: boolean;
}

const BasicTile: React.FC<BasicTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL, half, third, fourth, square}) => {
    const sizeDown = half || third;
    return (
        <Container className={`basic-tile-wrapper ${half ? 'basic-tile-half' : ''} ${third ? 'basic-tile-third' : ''} ${fourth ? 'basic-tile-fourth': ''}`}>
            <Row className={`basic-tile`}>
                <div className={`basic-tile-image ${square && 'basic-tile-square'}`}style={{backgroundImage: `url(${item.image})`}}>
                    
                </div>

                <div className="basic-tile-text" >
                    <h5>{item.subtitle}</h5>
                    <h3 className="title-sans">{item.title}</h3>
                    <p>{item.description}</p>
                    {hasLinks && <Link to={`${linkURL}`}>{linkText}</Link>}
                </div>
            </Row>
        </Container>
    )
}
export default BasicTile;