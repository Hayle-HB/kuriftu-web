import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { destinations } from '../../MockData/resortsAll';
import {RESORTDETAILS} from "../../MockData/resortsDetails";
import { Link } from 'react-router-dom';
import TextHero from '../../UI/Hero/TextHero';
import BasicTile from '../../UI/Card/BasicTiles/BasicTile';
import { Description } from '@mui/icons-material';


// ResortsPage component
const ResortsPage: React.FC = () => {
    const resortsAll = Object.keys(RESORTDETAILS);

    return (
        <Container fluid className="p-0 resort-page">
            
            {/* Hero Component */}
            <h2>{destinations.title}</h2>
            <TextHero classNames='destinations' text={destinations.description} />

            {/* Resorts Tiles */}
            <Container className="mt-5" fluid>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {resortsAll.map((r, index) => {
                        let resort = RESORTDETAILS[r];
                        let item = {
                            title: resort.name,
                            image: resort.cover_image,
                            description: resort.description.slice(0, 124)+'...',
                            subtitle: resort.region
                        }
                        return(
                            <BasicTile item={item} index={index} hasLinks={true} linkText='Explore' linkURL={`/resorts/${r}`} reveresed={false} third={true} square={true}/>
                    )
                    })}
                </Row>
            </Container>
        </Container>
    );
};

export default ResortsPage;
