import React from "react";
import styled from 'styled-components'

import pokedexLogo from "../assets/pokedex-logo.png";

const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    background-color: #CC3442;
    border-bottom: 2px solid #c1c1c1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-inline: 25px;
`;

const LogoImage = styled.img`
    height: 50px;
`;

export const TopNavigation = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImage src={pokedexLogo} alt="logo"/>
      </Content>
    </Wrapper>)
}
