import styled from 'styled-components';

export const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
`

export const TitleArea = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(100,100,100,0.9);
`

export const Title = styled.h1 `
    font: 700 40px 'Poppins';
    text-transform: uppercase;
    margin: 10px;
    text-align: center;
`

export const ListArea = styled.div`
    margin-top: 25px;
    width: 60%;
`

export const AddArea = styled.div`
    width: 100%;
    background: #181818;
    border: 1px solid rgba(100,100,100,0.9);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
`

export const AddImage = styled.img`
    width: 40px;
    margin: 0 10px 0 10px;
`

export const AddInput = styled.input`
    width: 93%;
    padding: 17px 0;
    background: none;
    border: none;
    outline-style: none;
    color: #F5F3F5;
    font-size: 20px;
`