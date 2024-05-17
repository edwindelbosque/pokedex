import React, { useCallback } from "react";
import styled from "styled-components";

import { GET_POKEMONS } from "../queries";
import { PokemonCard } from "../components";
import { useInfiniteScroll, useInfiniteQuery } from "../hooks";
import { Pokemon } from "../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Feed = () => {
  const { loading, error, data, loadMore } = useInfiniteQuery<Pokemon>(GET_POKEMONS);
  const { targetRef } = useInfiniteScroll(loadMore);

  const renderPokemons = useCallback(() => {
    return data?.map(({ name, url }, index: number) => {
      return (
        <PokemonCard
          key={url}
          name={name}
        />
      )
    })
  }, [data])

  return (
    <Wrapper>
      { loading && <div>Some loading state</div>}
      { error && <div>Some error state</div>}
      {renderPokemons()}
      <div ref={targetRef} />
    </Wrapper>
  )
};
