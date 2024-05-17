import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import { GET_POKEMON_IMAGE, useQuery } from "./queries";
import { PokemonDetails } from "./types/types";

const Card = styled.div`
    width: 100%;
    max-width: 600px;
    min-width: 600px;
    height: 660px;
    background: #fbf1f1;
    border-radius: 4px;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`;

const LinkContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    padding: 5px;
`;

const ProfilePicture = styled.img`
    border-radius: 50px;
    width: 30px;
    height: 30px;
    background: #d64545;
    border: 1px solid #3a3a3a;
`;

const Name = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: #303030;
`;

const Description = styled.span`
`;

const Photo = styled.img<{background: string}>`
    width: 100%;
    height: 500px;
    background-image: url(${props => props.background});
    background-position: center bottom;
    border-block: 1px solid #c1c1c1;
    border-radius: 2px;
    object-fit: cover;
    object-position: center;
`;

const DetailSection = styled.div`
    padding: 15px;
`;

const getMainPhoto = (data: any) => {
    return data?.sprites?.other?.home?.front_default;
}

type PokemonCardProps = {
    name: string;
    background: string;
}

export const PokemonCard = ({ name, background }: PokemonCardProps) => {
    const { data, loading, error } = useQuery<PokemonDetails>(GET_POKEMON_IMAGE(name));
    const mainPhoto = getMainPhoto(data);
    const profilePhoto = data?.sprites.other.showdown.front_default;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div />
    }

    console.log("+++ data", data);

    const pokemonUrl = `/pokemons/${name}`;

  return (
    <Card>
      <Header>
        <LinkContainer to={pokemonUrl}>
          <ProfilePicture src={profilePhoto} />
          <Name to={pokemonUrl}>
            {name}
          </Name>
        </LinkContainer>
    </Header>
  <Photo src={mainPhoto} background={background} />
  <DetailSection>
    <Name to={pokemonUrl}>
      {name}&nbsp;
    </Name>
    <Description>
      What's up
    </Description>
  </DetailSection>
</Card>
)
};
