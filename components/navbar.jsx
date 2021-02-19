import React,{useEffect} from 'react';

import {NavbarContent,LiItem,LinkItem, NavListContainer,Title} from './style-components/stylecomponents';



export const Navbar = () => {



    const NavigationObject = [
        {
            title: 'Home',
            path: "/"
        },
        {
            title: 'Photos',
            path: "/photos"
        },
        {
            title: 'Post',
            path: "/post"
        },
        {
            title: 'About',
            path: "/about"
        },
    ]


    const ClickRoute = (ev) => {
        console.log(ev)
    }


    return <> 
        <NavbarContent className="nav_bar">
            <Title>NextJS ReactJS</Title>
            <NavListContainer 
                className='nav_list'>
                {
                    NavigationObject.map((v,index)=>(
                            <LiItem 
                                className={"li_item  id-"+index} 
                                key={"li_item-" + index}>

                                <LinkItem 
                                    className={"link-" + index} 
                                    onClick={ClickRoute} 
                                    href={v.path}>
                                    <a>{v.title}</a>
                                </LinkItem>
                            </LiItem>
                    ))
                }

            </NavListContainer>
            

        </NavbarContent>
    
    
    </>

}