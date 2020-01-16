import styled from 'styled-components'

import { fadeIn } from './../../styles/animation';

export const List = styled.ul`
    display: flex;
    overflow-x: scroll;
    &.fixed {
        ${fadeIn};
       background: #fff;
       border-radius: 60px;
       box-shadow: 0 0 20px rgba(0, 0, 0, 0, 0.3);
       left: 0;
       margin: 0 auto;
       max-width: 400px;
       right: 0;
       top: -20px;
       position: fixed;
       padding: 5px;
       transform: scale(.75);
       z-index: 1; 
    }
`

export const Item = styled.li`
    padding: 0 8px;
`