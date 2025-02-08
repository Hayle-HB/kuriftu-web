import{Row, Col} from 'react-bootstrap';
type TextHeroProps = {
    title: string;
    list: string[];
    classNames: string;
}
const ListHero: React.FC<TextHeroProps> = ({ title, list, classNames }) => {
    return(
        <div className={`hero-list ${classNames}`}>
            <h1>{title}</h1>
           <Row className='hero-list-wrapper' >
                <Col sm={12} md={6}>
                    <ul>
                        {list.map((item, index)=>(
                            <p><li key={index}>{item}</li></p>
                        ))}
                    </ul>
                </Col>
           </Row>
        </div>
    )
}
export default ListHero;