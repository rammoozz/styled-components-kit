# Theme application


```js
import { createTheme } from 'styled-components-kit'
import { ThemeProvider } from 'styled-components'

const defaultTheme = createTheme()

// const compactTheme = createTheme({ spacing: { unit: 4 } })
// const darkTheme = createTheme({ type:'dark'})
// const lightTheme = createTheme({ type:'light' })

<ThemeProvider theme={defaultTheme}>
    <App/>
</ThemeProvider>

```