import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components'
import Switcher from './components/Switcher'
import GlobalStyle from './GlobalStyle'

import light from './themes/light'
import dark from './themes/dark'

const App = () => {

  const[theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.title === 'light'? dark : light )
  }

  return(
   <ThemeProvider theme={theme} >
      <div>
      <GlobalStyle/>
      <h1>Hello from Theme Switcher</h1>
      <Switcher toggleTheme={handleTheme}/>
    </div>
   </ThemeProvider>
  )
}

export default App