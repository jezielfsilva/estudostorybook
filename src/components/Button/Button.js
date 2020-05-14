import React from 'react';
import styled from 'styled-components';

const ButtonSend = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:  0.25em;
    border: 0;
    font-size: 1em;
    color: ${props => props.color};
    background: ${props => props.background};
    margin: ${props => props.margin};
`;

const Button = (props) => {
    return (
    <ButtonSend
        icon={props.icon}
        background={props.background || 'transparent'}
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        color={props.color || '#FFF'}
        margin={props.margin}>
            {props.children}
    </ButtonSend>
    );
}

export default Button;