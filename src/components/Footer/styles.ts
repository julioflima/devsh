import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.one};
  width: 100%;
  color: ${({ theme }) => theme.colors.tertiary.one};
  padding-top: 3em;
  padding-bottom: 3em;
  display: grid;
  font-family: monospace;
  font-size: 24px;
`;

export const HelpPost = styled.div`
  display: grid;
  margin-top: 5em;
  margin-bottom: 5em;
  a {
    font-family: "logo";
    text-decoration: none;
    font-size: 40px;
  }
`;

export const FooterNote = styled.div`
  bottom: 5px;
  width: 100%;
  position: relative;
  span {
    font-size: 14px;
  }
`;
