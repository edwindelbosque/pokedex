import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-block: 40px;
    background: #EFEFEF;
`;

const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    padding-inline: 25px;
    min-width: 200px;
    display: flex;
    justify-content: center;
`;

type PageLayoutProps = {
    children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children}) => {
    return (
      <Wrapper>
          <Content>
              {children}
          </Content>
      </Wrapper>
    )
};
