/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.one};
  width: 100%;
  color: ${({ theme }) => theme.colors.tertiary.one};
  padding-top: 3em;
  padding-bottom: 3em;
  font-size: 60px;
  font-family: "Sketch 3D";
  display: grid;
  user-select: none;

  span {
    font-family: sans-serif;
    font-size: 20px;
  }
`;
