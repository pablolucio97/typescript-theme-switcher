import React, {useContext} from 'react'

import {BoxSwitcher, Button} from './styles'
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
         <Button onClick={toggleTheme}>
             {title === 'light'? 'Jump to Dark Theme' : 'Jump to Light Theme'}
        </Button>
        </BoxSwitcher>
    )
}

export default Switcher