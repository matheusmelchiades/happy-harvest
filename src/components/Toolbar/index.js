import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../services/api';
import {
    Container,
    Logo,
    LogoIcon,
    ToolContent,
    ToolContentItem,
    Icon,
    ButtonIcon,
} from './styles';

const Toolbar = ({ history }) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        async function fetchMenus() {
            try {
                const response = await api.get('/system/toolbar');

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
                    <Icon>eco</Icon>
                </LogoIcon>
            </Logo>
            <ToolContent>
                {menus.map(({ icon, path }) => (
                    <ToolContentItem key={icon}>
                        <ButtonIcon onClick={() => history.push(path)}>
                            <Icon>{icon}</Icon>
                        </ButtonIcon>
                    </ToolContentItem>
                ))}
            </ToolContent>
        </Container>
    );
};

export default withRouter(Toolbar);
