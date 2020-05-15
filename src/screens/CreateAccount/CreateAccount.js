import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/Button';

const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #115680, #116EA0);
`;

const Container = styled.div`
    width: 30vw;
    min-height: 55vh;
    background: #FFF;
    border-radius: 0.25em;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const TitleForm = styled.h1`
    font-size: 1.5em;
    color: #116EA0;
    align-self: flex-start;
    margin: 2rem 0 1.5rem 1.4rem;
`;

const CreateAccount = (props) => {
    return (
        <Overlay>
            <Container>
                <TitleForm>Criar Conta</TitleForm>
                <Form>
                    <Input type="text" placeholder="Insert name" labelText="Name" margin="0.5rem 0"/>
					<Input type="email" placeholder="name@email.com" labelText="Email" margin="0.5rem 0"/>
					<Input type="password" placeholder="Insert password" labelText="Senha" margin="0.5rem 0"/>
                    <Button width="20rem" height="3rem" background="#116EA0" margin="0.5rem 0 1rem 0">Criar Conta</Button>
                </Form>
            </Container>
        </Overlay>
    );
}

export default CreateAccount;