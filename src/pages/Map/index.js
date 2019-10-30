import React, { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';

import { Layout, DialogForm } from '../../components';
import Menu from './Menu';

const token = process.env.REACT_APP_MAP_TOKEN;

const viewPortInit = {
    latitude: -29.908557757624717,
    longitude: -51.18116996977884,
    zoom: 13,
    bearing: 0,
    pitch: 0,
};

const Map = ({ history }) => {
    const tabIndexDialog = 3;
    const [openModal, setOpenModal] = useState(false);
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
                if (latitude && longitude) setViewPort({ ...viewPort, latitude, longitude });
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
                                localStorage.setItem('geolocation', JSON.stringify(geo));
                                setOpenModal(!openModal);
                            },
                        },
                    ]}
                />
            </MapGL>
            <DialogForm
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                openOn={tabIndexDialog}
            />
        </Layout>
    );
};

export default Map;
