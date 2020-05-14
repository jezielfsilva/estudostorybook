import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 2rem);
    align-items: center;
    padding: .6rem 1rem;
    border-radius: ${props => (props.isOpen ? '0.25em 0 0 0' : '0.25em 0 0 0.25em')};
    color: #BBBBBB;
    background: ${props => props.isOpen && '#111E9620'};
    cursor: pointer;

    &:hover {
        background: #111E9620;
    }
`;

const Icon = styled.div`
    position: absolute;
    left: ${props => !props.arrow && '1rem'};
    right: ${props => props.arrow && '2rem'};
    bottom: .5rem;
    font-size: 1rem;
    transform: ${props => props.arrow && 'rotate(90deg)'};
`;

const Title = styled.p`
    width: 100%;
    margin: 0;
    font-size: .9rem;
    font-family: arial;
    margin-left: 1.25rem;
    font-weight: ${props => (props.isOpen ? '600' : '200')};

    &:hover {
        font-weight: 600;
    }
`;

const DropdownOption = (props) => {
    return (
        <Item onClick={props.handleDropdown} isOpen={props.isOpen}>
            <Icon>x</Icon>
            <Title isOpen={props.isOpen}>{props.title}</Title>
            <Icon arrow>></Icon>
        </Item>
    );
}

export default DropdownOption;