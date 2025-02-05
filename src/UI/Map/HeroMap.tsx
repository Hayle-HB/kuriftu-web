import React, { useEffect, useState } from 'react';
import { Map, Marker } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';
import useWindowDimensions from "../../Hooks/WindowDimensions"

interface Resort {
    id: number;
    name: string;
    location: string;
    coordinates: [number, number];
}

// Resort data with coordinates
const resorts: Resort[] = [
    { id: 1, name: 'Boston Day Spa', location: 'Addis Abeba, Ethiopia', coordinates: [8.99096223731173, 38.78364728225807] },
    { id: 2, name: 'Kuriftu Resort & Spa Entoto', location: 'Addis Abeba, Ethiopia', coordinates: [9.084330148200227, 38.74272430451018] },
    { id: 3, name: 'Kuriftu Resort & Spa Awash Falls', location: 'Awash, Ethiopia', coordinates: [8.9848, 39.9168] },
    { id: 4, name: 'Kuriftu Resort & Spa Bishoftu', location: 'Lake Kuriftu, Ethiopia', coordinates: [8.7542, 38.9785] },
    { id: 5, name: 'Kuriftu Water Park', location: 'Lake Kuriftu, Ethiopia', coordinates: [8.7542, 38.9785] },
    { id: 6, name: 'Kuriftu Resort & Spa Lake Tana', location: 'Bahirdar, Ethiopia', coordinates: [11.6019, 37.3934] },
];

const HeroMap: React.FC = () => {
    const maptilerProvider = maptiler('GacaudYOpgULIxVVFyBn', 'streets');
    
    const {width, height} = useWindowDimensions();
    return (
        <div className="map-container"style={{ width: '100%', height: '100vh' }}>
            <Map provider={maptilerProvider} dprs={[1, 2]} height={0.75*height} defaultCenter={[9.005401, 38.763611]} defaultZoom={6} metaWheelZoom={true}>
                {
                    resorts.map((resort, index)=>(
                        <Marker key={index} width={50} anchor={resort.coordinates} />
                    ))
                }
            </Map>
        </div>
    );
};

export default HeroMap;