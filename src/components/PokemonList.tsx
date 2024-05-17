import React, {useCallback} from "react";
import styled from "styled-components";

import { GET_POKEMONS } from "../queries";
import { PokemonCard } from "./PokemonCard";
import { useInfiniteScroll, useInfiniteQuery } from "../hooks";

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

const getBackgroundUrl = () => {
    return `https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/${LOCATIONS.FOREST}.jpg`;
};

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const PokemonList = () => {
    const { loading, error, data, loadMore } = useInfiniteQuery(GET_POKEMONS);
    const { targetRef } = useInfiniteScroll(loadMore);

    const renderPokemons = useCallback(() => {
        return data?.map((pokemon: any) => {
            const { name } = pokemon;
            return <PokemonCard name={name} background={getBackgroundUrl()} />
        })
    }, [data])

    return (
      <ContentList>
        { loading && <div>Some loading state</div>}
        { error && <div>Some error state</div>}
        {renderPokemons()}
        <div ref={targetRef} />
      </ContentList>
    )
};
