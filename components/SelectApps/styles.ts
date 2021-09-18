import styled from 'styled-components';

export const Container = styled.form`

    width: 100%;
    color: black;
    padding: 2em;
    display: grid;
    font-family: sans-serif;
    width: 100%;
    
    div {
        margin-top: 1em;
    }
    .AppSelect {
        margin-top: 25px;
    }
`;

export const Title = styled.div`
    font-weight: 600;
    text-align: left;
    font-size: 28px;
    width: 100%;
`;

export const AppSelect = styled.div`
    text-align: left;
    font-size: 20px;
    display: flex;
    font-family: monospace;

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
    input[type="checkbox"]{
        width: 20px; /*Desired width*/
        height: 20px; /*Desired height*/
    }
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
    background-color: #e67e22;
    padding: 10px 20px;
    color: #fff;
    border: 0;
    border-radius: 25px;
    cursor: pointer;
    text-decoration: none;

`;