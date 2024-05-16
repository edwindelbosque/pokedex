import React from "react";
import styled from "styled-components";

import { GET_POKEMONS, useQuery } from "./queries";
import { PokemonCard } from "./PokemonCard";

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const PokemonList = () => {
    const { data, loading, error } = useQuery(GET_POKEMONS);

    if (loading) {
        return null;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("+++ data", data);

    const renderPokemons = () => {
        return data.results.map((pokemon: any) => {
            const { name } = pokemon;
            return <PokemonCard name={name} />
        })
    }

    return <ContentList>{renderPokemons()}</ContentList>
};
