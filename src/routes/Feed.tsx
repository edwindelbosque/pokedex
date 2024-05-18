import React, { useCallback } from "react";
import styled from "styled-components";

import loadingDots from "../assets/loading-dots.gif";
import { GET_POKEMONS } from "../queries";
import { PokemonCard } from "../components";
import { useInfiniteScroll, useInfiniteQuery } from "../hooks";
import { Pokemon } from "../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const LoadingIcon = styled.img`
    max-width: 300px;
    width: 100%;
`;

const RefetchRefElement = styled.div`
    height: 200px;
`;

export const Feed = () => {
  const { loading, error, data, loadMore } = useInfiniteQuery<Pokemon>(GET_POKEMONS);
  const { targetRef } = useInfiniteScroll(loadMore);

  const renderPokemonCards = useCallback(() => {
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
      { error && <div>Sorry! We couldn't load the feed, try reloading the page.</div>}
      {renderPokemonCards()}
      <RefetchRefElement ref={targetRef} />
      {loading && <LoadingIcon src={loadingDots} />}
    </Wrapper>
  )
};
