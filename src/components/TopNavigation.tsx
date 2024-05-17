import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

import pokedexLogo from "../assets/pokedex-logo.png";

const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    background-color: #9c2f38;
    border-bottom: 2px solid #424242;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
`;

const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    padding-inline: 25px;
`;

const LogoArea = styled(Link)`
    display: flex;
    text-decoration: none;
    gap: 10px;
    align-items: center;
`;

const Text = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
`;

const LogoImage = styled.img`
    height: 50px;
`;

export const TopNavigation = () => {
  return (
    <Wrapper>
      <Content>
        <LogoArea to={"/"}>
          <LogoImage src={pokedexLogo} alt="logo"/>
          <Text>Pokegram</Text>
        </LogoArea>
      </Content>
    </Wrapper>)
}
