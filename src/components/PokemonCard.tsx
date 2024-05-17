import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GET_POKEMON_IMAGE } from "../queries";
import { useQuery } from "../hooks";
import { PokemonDetails } from "../types";

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

const Photo = styled.img`
    width: 100%;
    height: 500px;
    background-image: url(${getBackgroundUrl()});
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
}

export const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data, loading, error } = useQuery<PokemonDetails>(GET_POKEMON_IMAGE(name));
  const mainPhoto = getMainPhoto(data);
  const profilePhoto = data?.sprites.other.showdown.front_default;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div />
  }

  const pokemonUrl = `/pokemons/${name}`;

  return (
    <Card>
      <Header>
        <LinkContainer to={pokemonUrl} state={data}>
          <ProfilePicture src={profilePhoto} />
          <Name to={pokemonUrl}>
            {name}
          </Name>
        </LinkContainer>
      </Header>
      <Photo src={mainPhoto} />
      <DetailSection>
        <Name to={pokemonUrl}>
          {name}&nbsp;
        </Name>
        <Description>
          ☀️🌴😎
        </Description>
      </DetailSection>
    </Card>
  )
};
