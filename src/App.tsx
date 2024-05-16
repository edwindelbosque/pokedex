import React from 'react';

import { PageLayout } from "./Layout";
import { PokemonList } from "./PokemonList";
import { TopNavigation } from "./components";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  `;

const App = () => {
    return (
        <AppWrapper>
            <TopNavigation />
            <PageLayout>
                <PokemonList />
            </PageLayout>
        </AppWrapper>
    );
};

export default App;
