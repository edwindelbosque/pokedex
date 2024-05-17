import React from "react";
import styled from "styled-components";

import { GET_POKEMONS, useQuery } from "./queries";
import { PokemonCard } from "./PokemonCard";

enum LOCATIONS {
    CITY = "city",
    CAVE = "cave",
    FOREST = "forest",
    COAST = "coast",
    VOLCANO = "volcano",
    GLACIER = "glacier",
    ARENA = "arena",
    CANYON = "canyon",
}

const getRandomLocation = () => {
    const values = Object.values(LOCATIONS);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

const getBackgroundUrl = () => {
    const location = getRandomLocation();
    return `https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/${location}.jpg`;
};

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const PokemonList = () => {
    const { data, loading, error } = useQuery<any>(GET_POKEMONS);

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
            return <PokemonCard name={name} background={getBackgroundUrl()} />
        })
    }

    return <ContentList>{renderPokemons()}</ContentList>
};
