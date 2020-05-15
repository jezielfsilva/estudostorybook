import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/Button';

const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #115680, #116EA0);
`;

const BlockForm = styled.div`
    width: 32vw;
    height: 55vh;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.25em;
    box-shadow: 0 1px 2px #0000001A;
`;

const Form =styled.form`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleForm = styled.h1`
    font-size: 1.5em;
    color: #116EA0;
    margin: 2rem 0 1.5rem 1.4rem;
`;

const Login = (props) => {
    return (
        <Overlay>
            <BlockForm>
                <TitleForm>Fazer Login</TitleForm>
                <Form>
                    <Input type="email" placeholder="name@email.com" labelText="Email" margin="0.5rem 0"/>
					<Input type="password" placeholder="Insert password" labelText="Senha" margin="0.5rem 0"/>
                    <Button width="20rem" height="3rem" background="#116EA0" margin="0.5rem 0 1rem 0">Entrar</Button>
                </Form>
            </BlockForm>
        </Overlay>
    );
}

export default Login;