import React, {useContext} from 'react'

import {BoxSwitcher} from './styles'
import GlobalStyle from '../GlobalStyle'
import{ThemeContext} from 'styled-components'

interface Props{
    toggleTheme():void
}

const Switcher : React.FC<Props> = ({toggleTheme}) => {

    const {colors, title} = useContext(ThemeContext)

    return(
        <BoxSwitcher >
          <GlobalStyle/>
         <button onClick={toggleTheme}>
             {title === 'light'? 'Jump to Dark Theme' : 'Jump to Light Theme'}
        </button>
        </BoxSwitcher>
    )
}

export default Switcher