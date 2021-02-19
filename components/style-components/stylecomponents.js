
import Link from 'next/link';
import styled from 'styled-components';
export const CardsContainer = styled('article')`
    display:grid;
   
    grid-template-columns:repeat(auto-fill,minmax(200px,300px));
    place-content:center;
    gap:20px;
    justify-content:center; 
    padding-top: 10px;
    padding-bottom:10px;

`;

export const ItemsContentCard = styled('div')`
    width: 30ch;
    text-align:center;
    background-color:#eee;
    display:flex;
    flex-direction:column;
    padding: 10px 5px;
    background-color:#000;
    
    h1{
        filter:invert(1);
    }
`

export const Img = styled('img')`
    max-width:100%;
    width: 30ch;
`;


export const NavbarContent = styled('nav')`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
align-items:center;
width: 100%;

background-color:#000;
`;

export const Title = styled('h1')`
    font-size:2em;
    font-weight: 100;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    filter:invert(1);
`;


export const NavListContainer = styled('ul')`
    text-decoration:none;
    display:flex;
    justify-content:center;
    list-style:none;
    gap:20px;

`;

export const LiItem = styled('li')`
    text-align:center;
    filter:invert(1);
`;

export const LinkItem = styled(Link)`
    padding: 20px 30px;
    filter:invert(1);
`;


export const PostContainer = styled('section')`
    display:grid;
   
    grid-template-columns:repeat(auto-fill,minmax(200px,300px));
    place-content:center;
    gap:20px;
    justify-content:center; 
    padding-top: 10px;
    padding-bottom:10px;

`;
export const PostCard = styled('article')`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    text-align:center;
    border:1px solid #000;
    background-color:#000;
    filter: invert(0);
    & p,h2{
        filter: invert(1);
    }

`;  



export const MathContent = styled('section')`
    width:100%;
    margin-top: 30px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;

`;
export const MathCard = styled('article')`
text-align:center;
`;