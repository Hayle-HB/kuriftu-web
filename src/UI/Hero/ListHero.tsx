import{Row, Col} from 'react-bootstrap';
type TextHeroProps = {
    title: string;
    list: string[];
    classNames: string;
    column: number;
}
const ListHero: React.FC<TextHeroProps> = ({ title, list, classNames, column }) => {
    

    return(
        <div className={`hero-list ${classNames}`}>
            <h1>{title}</h1>
           <Row className='hero-list-wrapper' >
                <Col sm={12}>
                    <ul>
                        {list.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Col>
           </Row>
        </div>
    )
}
export default ListHero;