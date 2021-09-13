import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';


export const MenuData=[
    {
        title:'Inicio',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text',
        key:1
    },
    {
        title:'Categorias',
        path:'/Products',
        icon:<SiIcons.SiProducthunt />,
        cName:'nav-text',
        key:2
    },
    {
        title:'Redes',
        path:'/Networks',
        icon:<BiIcons.BiNetworkChart />,
        cName:'nav-text',
        key:3
    }
]
