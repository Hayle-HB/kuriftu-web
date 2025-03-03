import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    image?: string;
    title: string;
    description: string;
    subtitle?: string;
}
type LinkTileProps = {
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
    textLimit?:number;
}

const LinkTile: React.FC<LinkTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL, half, third, fourth, square, textLimit}) => {
    const sizeDown = half || third;
    return (
        <a 
            className={`basic-tile-link basic-tile-wrapper`} 
            href={linkURL}
            >
            <Row className={`basic-tile`}>
                <Col className={`basic-tile-image ${square && 'basic-tile-square'}`} style={{backgroundImage: `url(${item.image})`}}>
                    
                </Col>

                <Col className="basic-tile-text">
                    <h5>{item.subtitle}</h5>
                    <h3 className="title-sans">{item.title}</h3>
                    <p>{textLimit ? item.description.slice(0,textLimit)+" ..." : item.description}</p>
                    {hasLinks && <Link to={`${linkURL}`}>{linkText}</Link>}
                </Col>
            </Row>
        </a>
    )
}
export default LinkTile;