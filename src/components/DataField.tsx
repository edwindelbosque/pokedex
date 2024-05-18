import React from "react";
import styled from "styled-components";

const DataFieldStyles = styled.div`
    width: 100%;
    background: #c8c8c8;
    padding: 10px;
`;

type DataFieldProps = {
  fieldName: string;
  value?: number | string
}

export const DataField = ({ fieldName, value }: DataFieldProps) => {
  return (
    <DataFieldStyles>{ fieldName }: { value }</DataFieldStyles>
  )
}
