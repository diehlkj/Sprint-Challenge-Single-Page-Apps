import React from "react";
import styled from "styled-components";

const Card = styled.div`
  
  background: aqua;
  box-sizing: border-box;
  margin: 10px;
  padding: 15px;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h1>{props.name}</h1>
      <p>Status: {props.status}</p>
    </Card>
  )
}
