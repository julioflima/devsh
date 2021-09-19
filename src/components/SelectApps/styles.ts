import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  color: ${({ theme }) => theme.colors.quaternary.one};
  padding: 2em;
  display: grid;
  font-family: sans-serif;
  width: 100%;

  div {
    margin-top: 1em;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  text-align: left;
  font-size: 28px;
  width: 100%;
  user-select: none;
`;

export const CategorySection = styled.div`
  text-align: left;
  font-size: 24px;
`;

export const ContainerCategories = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
`;

export const ButtonDownload = styled.a`
  width: fit-content;
  margin: auto;
  margin-top: 5em;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.secondary.one};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.tertiary.one};
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
`;
