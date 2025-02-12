import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
type TextHeroProps = {
    image: string;
    title: string;
    text?: string;
    classNames: string;
    linkURL?:string;
    linkText?: string;
}
const ImageHero: React.FC<TextHeroProps> = ({ image, title, text, linkURL, linkText, classNames }) => {
    return(
        <Row className={`hero-image ${classNames}`} style={{backgroundImage: `url(${image})`}}>
            <h1>{title}</h1>
            {text && <p>{text}</p>}
            {linkURL && linkText && <Link to={linkURL}>{linkText}</Link>}
        </Row>
    )
}
export default ImageHero;