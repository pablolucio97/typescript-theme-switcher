import styled from 'styled-components'

export const BoxSwitcher = styled.div `
 display: absolute;
 position: absolute;
 top: 20px;
 right: 20px;
`

export const Button = styled.button `
display: flex;
justify-content: center;
align-items: center;

width: 180px;
height: 35px;
border: none;
outline: none;
font-weight: bold;
font-size: 1.1.rem;
transition: transform .2s box-shadow .1s;
&:hover{
    transform: scale(1.03);
    box-shadow: 0px 0px 45px 1px #333;
}
`