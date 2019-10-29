import React, { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';

import { Layout, DialogForm } from '../../components';
import Menu from './Menu';

const token =
    'pk.eyJ1IjoibWF0aGV1c21lbGNoaWFkZXMiLCJhIjoiY2pzdGRuanQxMHYwZzQ0cDZlMHhmZXQxeCJ9.SKPEaAIYVQ0-BFbppHQfyA';

const viewPortInit = {
    latitude: 0,
    longitude: 0,
    zoom: 13,
    bearing: 0,
    pitch: 0,
};

const Map = ({ history }) => {
    const [viewPort, setViewPort] = useState(viewPortInit);
    const [positionMenu, setPositionMenu] = useState({ x: 0, y: 0 });
    const [geo, setGeo] = useState({});

    useEffect(() => {
        const state = history.location.state || {};

        if (state.latitude && state.longitude) {
            setViewPort({
                ...viewPort,
                latitude: state.latitude,
                longitude: state.longitude,
            });
        } else {
            navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                setViewPort({ ...viewPort, latitude, longitude });
            });
        }
    }, []);

    return (
        <Layout>
            <MapGL
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/satellite-v9"
                mapboxApiAccessToken={token}
                {...viewPort}
                onViewportChange={viewport => setViewPort(viewport)}
                onNativeClick={({ srcEvent: { x, y }, lngLat: [longitude, latitude] }) => {
                    setPositionMenu({ x, y });
                    setGeo({ latitude, longitude });
                }}
            >
                <Menu
                    position={positionMenu}
                    items={[
                        {
                            label: 'New Field',
                            onClick: () => {
                                console.log('chamo');
                                console.log(geo);
                            },
                        },
                    ]}
                />
            </MapGL>
            <DialogForm title="mill" dialogProps={{ open: true }} />
        </Layout>
    );
};

export default Map;
