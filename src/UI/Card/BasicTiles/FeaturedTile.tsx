import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type ItemProps = {
    image?: string;
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

const FeaturedTile: React.FC<BasicTileProps> = ({item, index, reveresed, hasLinks, linkText, linkURL}) => {
    return (
        <Row className="featured-tile">
          <div className="featured-tile-img" style={{backgroundImage: `url(${item.image})`}}></div>
          <div className="featured-tile-text">
            <h3>{item.headerText}</h3>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {hasLinks && linkURL && <Link to={linkURL}>{linkText}</Link>}
          </div>
        </Row>
    )
}
export default FeaturedTile;