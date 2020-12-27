import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }
    body{
        background: ${porps => porps.theme.colors.background};
        color: ${props => props.theme.colors.text};
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 30px;
    }

    h1{
        font-size: 2rem;
        margin: 5px;
    }
`
