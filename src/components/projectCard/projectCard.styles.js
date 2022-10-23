import styled from "styled-components";

export const ProjectCardContainer = styled.div`
border: red solid 1px;
color: #0B5570;
min-width: 601px;
min-height:284px;
font-family: 'Poppins', sans-serif;



`;

export const ProjectTitle = styled.div`
display: flex;
flex-flow: row;
font-size: 24px;
justify-content: space-between;
border: red solid 1px;
padding: 0 50px;

`

export const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px ;
    grid-template-rows: 40px 40px; 
    column-gap: 10px;
    row-gap: 15px;
    border: 1px solid green;


`

export const IconWrapper = styled.div`
    border: 1px dotted blue;
    display: flex;
    flex-flow: row;
`

export const RolesContainer = styled.div`
display: grid;
    grid-template-columns: 220px 220px 220px ;
    grid-auto-rows: auto;
    column-gap: 10px;
    row-gap: 15px;
    border: 1px solid green;
`

export const Role = styled.div`
    border: #FD9900 solid 1px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`
