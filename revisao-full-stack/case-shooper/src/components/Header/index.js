import React from 'react';
import logo from '../../assets/img/icon.jpg'
import { MyHeader, MyLogo } from './style';

export default function Header() {
    return (
        <MyHeader>
            <MyLogo src={logo} alt='Imagem do Mercado' />
        </MyHeader>
    );
}