import React, { useState, useEffect } from 'react';

import { Menu, MenuItem } from './styles';

export default function({ position, items = [] }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(!show);
    }, [position]);

    return (
        !!items.length &&
        show && (
            <Menu position={position}>
                {items.map(({ label = '', onClick }) => (
                    <MenuItem onClick={onClick}>{label}</MenuItem>
                ))}
            </Menu>
        )
    );
}
