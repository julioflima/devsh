/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  font-size: 20px;
  display: flex;
  font-family: monospace;
  margin-top: 25px;

  img {
    width: 20px;
    margin: auto;
    margin-right: 15px;
    margin-left: 0;
  }

  input {
    font-size: 16px;
    margin: auto;
    margin-right: 15px;
    margin-left: 0;
    cursor: pointer;
  }
  input[type="checkbox"] {
    width: 20px; /*Desired width*/
    height: 20px; /*Desired height*/
  }
`;
