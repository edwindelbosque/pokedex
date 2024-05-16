import React from "react";
import styled from "styled-components";
import {GET_POKEMON_IMAGE, GET_POKEMONS, useQuery} from "./queries";

const Card = styled.div`
    width: 100%;
    max-width: 600px;
    min-width: 600px;
    height: 700px;
    background: #fbf1f1;
    border-radius: 4px;
`;

const Header = styled.div`
    padding: 30px;
`;

const Name = styled.div`
    font-weight: bold;
`;

const Photo = styled.div`

`;

const Description = styled.div`

`;

type PokemonCardProps = {
    name: string;
}

export const PokemonCard = ({ name }: PokemonCardProps) => {
    const { data, loading, error } = useQuery(GET_POKEMON_IMAGE(name));

    console.log("+++ data", data);

    return (
      <Card>
          <Header>
              <Name>
                  {name}
              </Name>
          </Header>
          <Photo />
          <Description />
      </Card>
    )
};
