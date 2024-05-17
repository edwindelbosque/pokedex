import React from "react";
import { Link, useParams, ScrollRestoration } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "../hooks";
import { GET_POKEMON_IMAGE } from "../queries";
import { PokemonDetails as PokemonDetailsType } from "../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 1000px;
    row-gap: 30px;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #e3e3e3;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0 6px 0 1px rgba(0, 0, 0, 0.1);
`

const Header = styled.div`
    font-size: 26px;
    height: 70px;
    padding: 30px;
    width: 100%;
    background: #973131;
    border: 1px solid #773e3e;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 6px 6px 0 0;
`

const Image = styled.img`
    width: 500px;
`;

const BackButton = styled(Link)`
    text-decoration: none;
    width: fit-content;
    padding: 5px;
    color: black;
    font-weight: bold;
`;

const DataFieldStyles = styled.div`
    width: 100%;
    background: #c8c8c8;
    padding: 10px;
`;

export const PokemonDetails = () => {
  const { name } = useParams();
  const { data, loading, error } = useQuery<PokemonDetailsType>(GET_POKEMON_IMAGE(name || ""));

  if (loading) {
    // Add a loading state
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle error gracefully
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <ScrollRestoration />
      <BackButton to={"/"}>{"< Back to Pokemons"}</BackButton>
      <DetailsContainer>
        <Header>
          {name}
        </Header>
        <Image src={data?.sprites.other["official-artwork"].front_default} />
        <DataField fieldName="Height" value={data?.height} />
        <DataField fieldName="Base experience" value={data?.base_experience} />
        <DataField fieldName="Order" value={data?.order} />
        <DataField fieldName="Weight" value={data?.weight} />
      </DetailsContainer>
    </Wrapper>
  )
}

const DataField = ({ fieldName, value }: { fieldName: string, value?: number | string }) => {
  return (
    <DataFieldStyles>{ fieldName }: { value }</DataFieldStyles>
  )
}
