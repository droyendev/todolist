import styled from "styled-components";

export const ListItemBox = styled.div`
    width: 100%;
    background: #181818;
    margin-bottom: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

export const ListItemChecker = styled.input`
    all: unset;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: 0 24px 0 10px;
    background: ${props => props.checked ? 'green' : '#e3e3e3'};
    border: none;
    outline-style: none;
`

export const ListItemText = styled.p`
    margin: 24px 0;
    font: 400 20px 'Poppins';
    max-width: 780px;
    word-break: break-word;
`