import React from 'react';
import Button from './Button';

export default {
    title: 'Buttons',
    component: Button,
};

export const ButtonLogin = () => <Button background="#112449" width="23.75em" height="3.5em">Entrar</Button>
export const ButtonCreateAccount = () => <Button background="#11246F" width="23.75em" height="3.5em">Concordar e Criar Conta</Button>
export const ButtonServiceTerms = () => <Button background="#1114FF" width="7.5em" height="2.25em">OK</Button>
export const SecondCreateAccount = () => <Button color="#505050">Criar Conta</Button>
export const RecoverPassword = () => <Button color="#505050">Recuperar Senha</Button>
export const BacktoLogin = () => <Button color="#505050">Voltar ao Login</Button>