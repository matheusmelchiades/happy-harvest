import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
    Container,
    Logo,
    LogoIcon,
    EcoIcon,
    ToolContent,
    ToolContentItem,
    Icon,
    ButtonIcon,
} from './styles';

const Toolbar = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        async function fetchMenus() {
            try {
                const response = await api.get('/menus');

                setMenus(response.data);
            } catch (err) {
                return err.message;
            }
        }

        fetchMenus();
    }, []);

    return (
        <Container>
            <Logo>
                <LogoIcon>
                    <EcoIcon />
                </LogoIcon>
            </Logo>
            <ToolContent>
                {menus.map(({ icon, path }) => (
                    <ToolContentItem key={icon}>
                        <ButtonIcon>
                            <Icon>{icon}</Icon>
                        </ButtonIcon>
                    </ToolContentItem>
                ))}
            </ToolContent>
        </Container>
    );
};

export default Toolbar;
