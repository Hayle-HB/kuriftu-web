import { Container, Row, Col } from "react-bootstrap";


interface GridGalleryProps {
    images: string[];
    classNames?: string;
    columns: number;
}

function splitIntoColumns(images: string[], columns: number): string[][] {
  const result: string[][] = Array.from({ length: columns }, () => []);
  images.forEach((image, index) => {
    result[index % columns].push(image);
  });
  return result;
}

const GridGallery: React.FC<GridGalleryProps> = ({ images, classNames, columns }) => {
    const galleryItems = splitIntoColumns(images, columns);

    return (
        <Container className={`gallery-wrapper ${classNames}`}>
            <Row>
                {galleryItems.map((column, columnIndex) => (
                    <Col key={columnIndex} sm={12} md={4}>
                        {column.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-image"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    marginTop: '24px',
                                    marginBottom: '24px',
                                }}
                            >
                                <img src={image}
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: 'auto'
                                }} />
                            </div>
                        ))}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GridGallery;
