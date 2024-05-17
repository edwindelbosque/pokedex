import React from "react";
import {PageLayout} from "../Layout";
import {PokemonList} from "../PokemonList";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  `;

export const Feed = () => {
  return (
    <AppWrapper>
      <PageLayout>
        <PokemonList />
      </PageLayout>
    </AppWrapper>
  )
};
