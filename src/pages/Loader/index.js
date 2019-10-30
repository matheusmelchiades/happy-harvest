import React, { useEffect } from 'react';
import Lottie from 'react-lottie';

import { Container } from './styles';
import animationData from '../../animations/ecolight.json';

const DEFAULT_OPTIONS = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export default function Loader({ history }) {
    useEffect(() => {
        setTimeout(() => {
            history.push('/map');
        }, 4000);
    }, []);

    return (
        <Container>
            <Lottie
                options={DEFAULT_OPTIONS}
                height={500}
                width={500}
                isStopped={false}
                isPaused={false}
            />
        </Container>
    );
}
