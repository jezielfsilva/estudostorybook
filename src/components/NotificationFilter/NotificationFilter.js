import React from 'react';
import styled from 'styled-components';
import SearchCell from '../SearchCell/SearchCell';

const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 48%;
    padding-bottom: .75rem;
    border-radius: 0.25em;
    border: solid .5px #FAB238;
    color: #026FFF;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1rem);
    padding-left: 1rem;
    margin-bottom: .75rem;
    border-radius: 0.25em 0.25em 0 0;
    background: #FAB855;
`;

const Title = styled.p`
    font-size: 1rem;
    color: #CCCCCC;
`;

const IconBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center:
`;

const Icon = styled.div`
    font-size: 1rem;
    margin: 0 .4rem;
    color: #CCCCCC;
    cursor: pointer;
`;

const CellBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 1rem;
`;

const NotificationFilter = (props) => {
    return (
        <Box>
            <Header>
                <Title>Filtro</Title>
                <IconBox>
                    <Icon>x Buscar</Icon>
                    <Icon>x Excluir</Icon>
                </IconBox>
            </Header>
            <CellBox>
                <SearchCell></SearchCell>
            </CellBox>
        </Box>
    );
}

export default NotificationFilter;