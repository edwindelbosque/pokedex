import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GET_POKEMON_IMAGE } from "../queries";
import { useQuery } from "../hooks";
import { PokemonDetails } from "../types";

enum LOCATIONS {
  FOREST = "forest",
}

const getBackgroundUrl = () => {
  return `https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/${LOCATIONS.FOREST}.jpg`;
};

const getMainPhoto = (data: any) => {
  return data?.sprites?.other?.home?.front_default;
}

const Card = styled.div`
    width: 100%;
    max-width: 600px;
    background: #EFEFEF;
    border-radius: 4px;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
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

const NameHeader = styled.p`
    font-weight: bold;
    text-decoration: none;
    color: #303030;
`;

const NameDescription = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: #303030;
`;

const Photo = styled.img`
    width: 100%;
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

const CardSkeleton = styled.div`
    max-width: 600px;
    width: 500px;
    min-height: 500px;
    background: #EFEFEF;
    border-radius: 4px;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
`;

type PokemonCardProps = {
  name: string;
}

export const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data, loading, error } = useQuery<PokemonDetails>({
    queryUrl: GET_POKEMON_IMAGE(name),
  });

  const mainPhoto = getMainPhoto(data);
  const profilePhoto = data?.sprites.other.showdown.front_default;

  if (loading) {
    return <CardSkeleton />;
  }

  if (error) {
    return <div>Sorry! We couldn't load the cards, try reloading the page.</div>
  }

  const navigateToPokemonDetails = {
    to: `/pokemons/${name}`,
    state: data,
  }

  return (
    <Card>
      <Header>
        <LinkContainer {...navigateToPokemonDetails}>
          <ProfilePicture src={profilePhoto} alt={`Profile picture of ${name}`} />
          <NameHeader>
            {name}
          </NameHeader>
        </LinkContainer>
      </Header>
      <Photo src={mainPhoto} alt={`Picture of ${name}`} />
      <DetailSection>
        <NameDescription {...navigateToPokemonDetails}>
          {name}&nbsp;
        </NameDescription>
          ☀️🌴😎
      </DetailSection>
    </Card>
  )
};
